const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tariff extends Model {
    static associate() {}
  }
  Tariff.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      condition: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Tariff',
    },
  );
  return Tariff;
};