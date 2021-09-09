const router = require('express').Router();
const CategoriesController = require('../controllers/categories.controller');

const categoriesController = new CategoriesController();

router.post('/:categoryId/animals', categoriesController.createNewAnimal);

module.exports = router;
