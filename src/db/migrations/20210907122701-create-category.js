module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          isAlpha: true,
        },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Categories');
  },
};
