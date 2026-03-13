const express = require("express");
const router = express.Router();
const teamController = require("../../controllers/web/team.controller");

router.get("/", teamController.index); // index
router.get("/:slug", teamController.show); // show


module.exports = router;
