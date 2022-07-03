const { User } = require("../models");
const { verifyPassword } = require("../helpers/bcrypt");
const { generateJWToken } = require("../helpers/jwt");

class userController {
  static async registerUser(req, res, next) {
    try {
      const { email, username, password, phoneNumber, address } = req.body;
      const newUser = {
        email,
        username,
        password: "" + password,
        phoneNumber: "" + phoneNumber,
        address: "",
        role: "admin",
      };
      const createdUser = await User.create(newUser);
      res.status(201).json({
        code: 201,
        status: "Successfully registered",
        data: createdUser,
      });
    } catch (err) {
      next(err);
    }
  }

  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw {
          name: "No email/password",
          message: email
            ? "Please enter your password"
            : "Please enter your email",
        };
      }

      const userFound = await User.findOne({
        where: {
          email,
        },
      });

      if (!userFound) {
        throw { name: "Invalid email or password" };
      }

      const hash = userFound.password;

      const isPasswordCorrect = verifyPassword(password, hash);
      if (!isPasswordCorrect) {
        throw { name: "Invalid email or password" };
      }

      const access_token = generateJWToken({
        id: userFound.id,
        email: userFound.email,
        role: userFound.role,
      });
      res.status(200).json({
        code: 200,
        status: "Successfully logged in",
        access_token,
        // userData: {
        //   email: userFound.email,
        //   username: userFound.username,
        //   phoneNumber: userFound.phoneNumber,
        //   address: userFound.address,
        //   role: userFound.role,
        //   id: userFound.id,
        // },
      });
    } catch (err) {
      next(err);
    }
  }

  static async registerCustomer(req, res, next) {
    try {
      const { email, username, password, phoneNumber } = req.body;
      const newUser = {
        email,
        username,
        password: "" + password,
        phoneNumber: "" + phoneNumber,
        role: "customer",
      };
      const createdUser = await User.create(newUser);
      res.status(201).json({
        code: 201,
        status: "Successfully registered",
        data: createdUser,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = userController;
