"use strict";
const drinks = require("../data/drinks.json");
const { Ingredient } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    let count = 1;
    drinks.forEach((drink) => {
      drink.ingredients.forEach(async (el) => {
        await queryInterface.bulkInsert(
          "Ingredients",
          [{ name: el, drinkId: count }],
          {}
        );
      });
      count++;
      delete drink.ingredients;
      drink.createdAt = new Date();
      drink.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Drinks", drinks, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Drinks", null, {});
  },
};
