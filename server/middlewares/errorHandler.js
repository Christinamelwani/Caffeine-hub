function errorHandler(err, req, res, next) {
  let code = 500;
  let message = "Internal server error";
  let detail = "No details available- contact developer";

  console.log(err);
  if (err.name === "Invalid email or password") {
    code = 401;
    message = err.name;
  }
  if (err.name === "No email/password") {
    code = 400;
    message = err.message;
  }
  if (err.name === "SequelizeValidationError") {
    code = 400;
    message = "Inapproriate input";
    detail = err.errors.map((el) => el.message).join("\n");
  }
  if (err.name === "SequelizeUniqueConstraintError") {
    code = 400;
    message = "Email already taken!";
  }
  if (err.name === "Ingredients are required!") {
    code = 400;
    message = err.name;
    detail = "none";
  }
  if (err.name === "not found") {
    code = 404;
    message = "That entity not found!";
    detail = "none";
  }
  res.status(code).json({ message, detail });
}

module.exports = { errorHandler };
