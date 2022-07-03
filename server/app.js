const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const { errorHandler } = require("./middlewares/errorhandler");
const port = 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routers");

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Listening now");
});
