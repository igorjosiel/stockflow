'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable("usuarios", "users");
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable("users", "usuarios");
  }
};
