/* eslint-disable class-methods-use-this */
const TariffsService = require('../services/tariffs.service');

const tariffsService = new TariffsService();

class TariffsController {
  async createNewTariff(req, res) {
    const tariffData = req.body;
    tariffData.image = req.file.path.replace(/^public/, '');
    const newTariff = await tariffsService.createNewTariff(req.body);

    res.status(201).json(newTariff);
  }
}

module.exports = TariffsController;
