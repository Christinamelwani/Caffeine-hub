// const { unloadJWToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authenticate(req, res, next) {
  try {
    // const { access_token } = req.headers;
    // if (!access_token && req.method === "GET") {
    //   next();
    // } else {
    //   const userData = unloadJWToken(access_token);
    //   const { email, username, phoneNumber } = userData;
    //   const userFound = await User.findOne({
    //     where: {
    //       email,
    //       username,
    //       phoneNumber,
    //     },
    //   });

    //   if (!userFound) {
    //     throw { name: "Invalid username/email/phone number or password" };
    //   }

    //   userData.id = userFound.id;

    //   req.user = userData;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { authenticate };
