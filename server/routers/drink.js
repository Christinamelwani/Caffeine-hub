const express = require("express");
const drinkController = require("../controllers/drink");
const { authenticate } = require("../middlewares/authentication");
const drinkRouter = express.Router();

drinkRouter.use(authenticate);
drinkRouter.get("/", drinkController.getDrinks);
drinkRouter.post("/", drinkController.postDrink);
drinkRouter.get("/:id", drinkController.getDrink);
drinkRouter.delete("/:id", drinkController.deleteDrink);
drinkRouter.put("/:id", drinkController.updateDrink);

module.exports = drinkRouter;
