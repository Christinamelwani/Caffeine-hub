function errorHandler(err, req, res, next) {
  console.log(err);

  let code = 500;
  let message = "Internal server error";
  let detail = "No details available- contact developer";

  res.status(code).json({ message, detail });
}

module.exports = { errorHandler };
