/* eslint-disable class-methods-use-this */
const TariffsService = require('../services/tariffs.service');

const tariffsService = new TariffsService();

class TariffsController {
  async createNewTariff(req, res) {
    console.log(req.body);
    const newTariff = await tariffsService.createNewTariff(req.body);

    res.status(201).json(newTariff);
  }
}

module.exports = TariffsController;
