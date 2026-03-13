const express = require("express");
const router = express.Router();
const sliderController = require("../../controllers/web/slider.controller");

router.get("/", sliderController.index); // index
router.get("/:slug", sliderController.show); // show


module.exports = router;
