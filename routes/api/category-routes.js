const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const catData = await Category.findAll();
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const cat = await Category.findByPk(req.params.id);
    if (!cat) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    const item = cat.get({ plain: true });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const dbCatData = await Category.create({
      id: req.body.id,
      category_name: req.body.category_name,
    });

      res.status(200).json(dbCatData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
    Category.update(
      {
        // All the fields you can update and the data attached to the request body.
        id: req.body.id,
        category_name: req.body.category_name,
      },
      {
        // Gets a category based on the id given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedCategory) => {
        res.json(updatedCategory);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    Category.destroy({
      where: {
        id: req.params.id
      },
    })
      .then((deletedCat) => {
        res.status(200).json(deletedCat);
      })
      .catch((err) => {
        res.status(500).json(err);
      })
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
