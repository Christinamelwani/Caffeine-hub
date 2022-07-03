const bcrypt = require("bcrypt");

function hashPassword(password) {
  const hash = bcrypt.hashSync(password, 5);
  return hash;
}

function verifyPassword(enteredPassword, hash) {
  const isPasswordCorrect = bcrypt.compareSync(enteredPassword, hash);
  return isPasswordCorrect;
}

module.exports = { hashPassword, verifyPassword };
