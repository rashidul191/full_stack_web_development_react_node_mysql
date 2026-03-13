const express = require("express");
const router = express.Router();
const categoryController = require("../../controllers/web/category.controller");

router.get("/", categoryController.index); // index
router.get("/:slug", categoryController.show); // show

module.exports = router;
