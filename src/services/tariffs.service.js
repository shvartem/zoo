/* eslint-disable class-methods-use-this */
const db = require('../db/models');

class TariffsService {
  async findAllTariffs() {
    try {
      const tariffs = await db.Tariff.findAll();

      return tariffs;
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось найти все тарифы.' };
    }
  }

  async createNewTariff({ title, description, condition, price, image }) {
    try {
      const tariff = await db.Tariff.create({
        title,
        description,
        condition,
        price,
        image,
      });

      return tariff;
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось создать тариф.' };
    }
  }

  async findTariffById(id) {
    try {
      const tariff = await db.Tariff.findOne({
        where: {
          id,
        },
      });

      return tariff;
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось найти тариф.' };
    }
  }

  async editTariffById({ id, title, description, condition, price, image }) {
    try {
      const tariff = await db.Tariff.update(
        {
          title,
          description,
          condition,
          price,
          image,
        },
        {
          where: {
            id,
          },
        },
      );

      return tariff;
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось отредактировать тариф.' };
    }
  }

  async deleteTariffById(id) {
    try {
      await db.Tariff.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось удалить тариф.' };
    }

    return { message: 'Новость удалена.' };
  }
}

module.exports = TariffsService;
