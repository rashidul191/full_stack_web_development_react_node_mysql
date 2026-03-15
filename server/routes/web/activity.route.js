const express = require("express");
const router = express.Router();
const activityController = require("../../controllers/web/activity.controller");

router.get("/", activityController.index); // index
router.get("/:id", activityController.show); // show

module.exports = router;
