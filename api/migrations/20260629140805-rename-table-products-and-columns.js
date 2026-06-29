'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable("produtos", "products");

    await queryInterface.renameColumn(
      "products",
      "nome",
      "name"
    )

    await queryInterface.renameColumn(
      "products",
      "descricao",
      "description"
    )

    await queryInterface.renameColumn(
      "products",
      "preco",
      "price"
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable("products", "produtos");

    await queryInterface.renameColumn(
      "products",
      "name",
      "nome"
    )

    await queryInterface.renameColumn(
      "products",
      "description",
      "descricao"
    )

    await queryInterface.renameColumn(
      "products",
      "price",
      "preco"
    )
  }
};
