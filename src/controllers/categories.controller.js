/* eslint-disable class-methods-use-this */
const CategoriesService = require('../services/categories.service');

const categoryService = new CategoriesService();

class CategoriesController {
  async createNewAnimal(req, res) {
    const animalData = req.body;
    animalData.image = req.file.path.replace(/^public/, '');

    try {
      const newAnimal = await categoryService.createAnimal(animalData);
      res.status(201).json(newAnimal);
    } catch (error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }
}

module.exports = CategoriesController;
