const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Find all categories
router.get('/', (req, res) => {
  try {
    const categoryData = Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find one category by its `id` value
router.get('/:id', (req, res) => {
  // be sure to include its associated Products
  try {
    const categoryData = Category.findByPk(req.params.id, {
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
router.post('/', (req, res) => {
  try {
    const newCategory = Category.create(req.body, {
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a category by its `id` value
router.put('/:id', (req, res) => {
  try {
    const categoryData = Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      },
      res.status(200).json(categoryData),
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a category by its `id` value
router.delete('/:id', (req, res) => {
  try {
    const categoryData = Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
