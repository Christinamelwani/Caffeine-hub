const express = require("express");
const drinkController = require("../controllers/drink");
const { authenticate } = require("../middlewares/authentication");
const drinkRouter = express.Router();

drinkRouter.use(authenticate);
drinkRouter.get("/", drinkController.getDrinks);
drinkRouter.post("/", drinkController.postDrink);
drinkRouter.delete("/:id", drinkController.deleteDrink);

module.exports = drinkRouter;
