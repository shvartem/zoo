module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Schedules', [{
      weekdaysOpening: '09:00',
      weekdaysClosing: '20:00',
      weekendOpening: '10:00',
      weekendClosing: '21:00',
    }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Schedules', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
