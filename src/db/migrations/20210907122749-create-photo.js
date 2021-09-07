module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      photoUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      animalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Animals',
          },
        },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Photos');
  },
};