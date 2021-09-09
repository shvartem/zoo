const router = require('express').Router();
const db = require('../db/models');
const CategoriesController = require('../controllers/categories.controller');
const CategoriesService = require('../services/categories.service');
const upload = require('../middlewares/uploadFile.middleware');

const categoriesController = new CategoriesController();

router.get('/:id', categoriesController.getCategoryById);

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
  const [firstPhoto] = animalPhotos;
  firstPhoto.active = true;
  if(req.session.admin) {
    res.render('animal', { categories: req.categories, animal, animalPhotos,  admin: req.session.admin });
    return
  }
  res.render('animal', { categories: req.categories, animal, animalPhotos });
});

router.post('/:categoryId/animals/:animalId/photos', upload.single('image'), categoriesController.addPhotoForAnimal);

router.post('/:categoryId/animals', upload.single('image'), categoriesController.createNewAnimal);

router.put('/:categoryId/animals/:animalId', upload.single('image'), categoriesController.editAnimal)

router.delete('/:categoryId/animals/:animalId', categoriesController.deleteAnimal)

module.exports = router;
