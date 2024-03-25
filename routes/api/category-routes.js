const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Find all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find one category by its `id` value
router.get('/:id', async (req, res) => {
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    
    if (!categoryData) {
      res.status(404).json({ message: 'No category with that id exists.'});
      return;
    }

    res.status(200).json(categoryData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body, {
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const [categoryData] = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    // Find products belonging to that category and set their category_id to null
    const childProducts = await Product.findAll({ where: { category_id: req.params.id } });    
    for (const product of childProducts) {
      product.category_id = null;
      await product.save();
    }

    const categoryData = await Category.destroy({ where: { id: req.params.id } });
    res.status(200).json(categoryData);

  } catch (err) {
      res.status(500).json(err);
  };
});

module.exports = router;
