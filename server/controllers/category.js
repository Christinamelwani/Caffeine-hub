const { Drink, User, Category, Ingredient } = require("../models");
class categoryController {
  static async getCategories(req, res, next) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }
  static async postCategory(req, res, next) {
    try {
      const { name } = req.body;
      const createdCategory = await Category.create({ name });
      res.status(201).json(createdCategory);
    } catch (err) {
      next(err);
    }
  }
  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;
      const destroyedCategory = await Category.destroy({ where: { id } });
      res.status(200).json(destroyedCategory);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = categoryController;
