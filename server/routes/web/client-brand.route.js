const express = require("express");
const router = express.Router();
const clientBrandController = require("../../controllers/web/client-brand.controller");

router.get("/", clientBrandController.index); // index
// router.get("/:id", clientBrandController.show); // show


module.exports = router;
