// const categoryRouter = require("./category");
// const drinkRouter = require("./user");
const userRouter = require("./user");

const express = require("express");
const router = express.Router();

router.use("/users", userRouter);
// router.use("/categories", categoryRouter);
// router.use("/drinks", drinkRouter);

module.exports = router;
