const router = require('express').Router();
const db = require('../db/models');
const CategoriesController = require('../controllers/categories.controller');
const CategoriesService = require('../services/categories.service');

const categoriesController = new CategoriesController();

router.get('/:id', async (req, res) => {
  const animals = await CategoriesService.findAllAnimalsByCategoryId(
    req.params.id,
  );

  const category = req.categories.find((el) => el.id == req.params.id);
  res.render('category', {
    categories: req.categories,
    animals,
    category: category.title,
  });
});

router.get('/:categoryId/animals/:animalId', async (req, res) => {
  const animal = await db.Animal.findOne({
    where: { id: req.params.animalId },
    include: { model: db.Category },
    raw: true,
  });
  const category = animal['Category.title'];
  animal.category = category;
  const animalPhotos = await db.Photo.findAll({
    where: { animalId: animal.id },
    raw: true,
  });
  const [firsPhoto] = animalPhotos;
  firsPhoto.active = true;

  res.render('animal', { categories: req.categories, animal, animalPhotos });
});

router.post('/:categoryId/animals', categoriesController.createNewAnimal);

module.exports = router;
