"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Drink);
    }
  }
  User.init(
    {
      username: { type: DataTypes.STRING },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Provide a valid email!",
          },
          notNull: {
            msg: "Provide a valid email",
          },
          isEmail: {
            msg: "Invalid email format!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Provide a password!",
          },
          notNull: {
            msg: "Provide a password",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
