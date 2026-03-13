const express = require("express");
const router = express.Router();
const teamController = require("../../controllers/admin/team.controller");
const uploadFile = require("../../middleware/upload.middleware");
const upload = uploadFile("teams");

router.get("/", teamController.index); // index
router.post("/", upload.single("image"), teamController.create);
router.get("/:id", teamController.show); // show
router.put("/:id", upload.single("image"), teamController.update); // edit then update
router.delete("/:id", teamController.delete); // destroy

module.exports = router;
