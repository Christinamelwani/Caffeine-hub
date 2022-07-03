const express = require("express");
const categoryController = require("../controllers/category");
const { authenticate } = require("../middlewares/authentication");
const categoryRouter = express.Router();

categoryRouter.use(authenticate);
categoryRouter.get("/", categoryController.getCategories);
categoryRouter.post("/", categoryController.postCategory);
categoryRouter.delete("/:id", categoryController.deleteCategory);

module.exports = categoryRouter;
