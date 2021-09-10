/* eslint-disable class-methods-use-this */
const db = require('../db/models');

class TariffsService {
  static async getAllTarifs() {
    let tariffs;
    try {
      tariffs = await db.Tariff.findAll({attributes: ['id', 'title', 'description','condition', 'price','image'], raw: true})
    }
    catch(e) {
       console.error(error);
      return { message: 'Не удалось найти все тарифы.' };
    }
    return tariffs
  }
}

module.exports = TariffsService