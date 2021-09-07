module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          isAlpha: true,
        },
      },
      lastName: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          isAlpha: true,
        },
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: [6, 10],
        },
      },
      isSuperAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Admins');
  },
};