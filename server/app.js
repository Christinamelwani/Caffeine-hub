const express = require("express");
const app = express();
const cors = require("cors");
// const Controller = require("./controllers");
// const errorHandler = require("./middlewares/errorHandler");
// const { loginCheck } = require("./middlewares/requireLogin");
const port = 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("test");
});
// app.use(errorHandler);

app.listen(port, () => {
  console.log("Listening now");
});
