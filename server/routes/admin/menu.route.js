const express = require("express");
const router = express.Router();
const menuController = require("../../controllers/admin/menu.controller");
const uploadFile = require("../../middleware/upload.middleware");
const upload = uploadFile("menus");

router.get("/", menuController.index); // index
router.post("/", upload.single("banner_image"), menuController.create);
router.get("/:id", menuController.show); // show
router.put("/:id", upload.single("banner_image"), menuController.update); // edit then update
router.delete("/:id", menuController.delete); // destroy

module.exports = router;
