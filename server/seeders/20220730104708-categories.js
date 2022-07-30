"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "espresso-based",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "tea-based",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "milk-based",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "other",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
