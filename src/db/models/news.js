const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    static associate({ Admin }) {
      this.belongsTo(Admin, { foreignKey: 'adminId' });
    }
  }
  News.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'News',
    },
  );
  return News;
};
