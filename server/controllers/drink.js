const { Drink, User, Category, Ingredient } = require("../models");
const { sequelize } = require("../models");
class drinkController {
  static async getDrinks(req, res, next) {
    try {
      const drinks = await Drink.findAll({
        include: [{ model: User, as: "Author" }, Category, Ingredient],
      });
      res.status(200).json(drinks);
    } catch (err) {
      next(err);
    }
  }
  static async postDrink(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { name, price, categoryId, description, imgUrl, ingredients } =
        req.body;
      const AuthorId = req.user.id;
      const newDrink = {
        name,
        price,
        CategoryId: categoryId,
        description,
        imgUrl,
        AuthorId,
      };
      const createdDrink = await Drink.create(newDrink, { transaction: t });
      if (ingredients) {
        ingredients.forEach(async (el) => {
          await Ingredient.create({ name: el, drinkId: createdDrink.id });
        });
      } else {
        throw { name: "Ingredients are required!" };
      }
      res.status(200).json(createdDrink);
      await t.commit();
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }
  static async deleteDrink(req, res, next) {
    try {
      const { id } = req.params;
      const destroyedDrink = await Drink.destroy({ where: { id } });
      res.status(200).json(destroyedDrink);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = drinkController;
