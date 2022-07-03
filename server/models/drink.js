"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Drink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Drink.belongsTo(models.Category);
      Drink.belongsTo(models.User, { as: "Author", foreignKey: "AuthorId" });
      Drink.hasMany(models.Ingredient, { foreignKey: "drinkId" });
    }
  }
  Drink.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Provide a drink name!",
          },
          notNull: {
            msg: "Provide a drink name!",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Provide a drink description!",
          },
          notNull: {
            msg: "Provide a drink description!",
          },
        },
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Provide a drink price!",
          },
          notNull: {
            msg: "Provide a drink price!",
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Provide an image url!",
          },
          notNull: {
            msg: "Provide an image url!",
          },
        },
      },
      AuthorId: DataTypes.INTEGER,
      CategoryId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Provide a category!",
          },
          notNull: {
            msg: "Provide a category!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Drink",
    }
  );
  return Drink;
};
