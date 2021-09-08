module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          isAlpha: true,
        },
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          isAlpha: true,
        },
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Categories',
          },
        },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Animals');
  },
};
