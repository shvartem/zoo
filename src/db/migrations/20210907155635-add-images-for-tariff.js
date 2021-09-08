module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Tariffs', 'image', {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('Tariffs', 'image');
  },
};
