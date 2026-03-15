const express = require("express");
const router = express.Router();
const activityController = require("../../controllers/admin/activity.controller");

router.get("/", activityController.index); // index
router.post("/", activityController.create); // post
router.get("/:id", activityController.show); // show
router.put("/:id", activityController.update); // edit then update
router.delete("/:id", activityController.delete); // destroy

module.exports = router;
