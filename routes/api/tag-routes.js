const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Find all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const tagData =  await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if(!tagData) {
      res.status(404).json({message: 'No tag with that id exists.'});
      return;
    };

    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err)
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body, {
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      },
      res.status(200).json(tagData),
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
