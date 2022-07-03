const { Drink, User, Category, Ingredient } = require("../models");
class ingredientController {
  static async getIngredients(req, res, next) {
    try {
      const { id } = req.params;
      const ingredients = await Ingredient.findAll({ where: { drinkId: id } });
      res.status(200).json(ingredients);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ingredientController;
