const express = require("express");
const router = express.Router();
const clientBrandController = require("../../controllers/admin/client-brand.controller");
const uploadFile = require("../../middleware/upload.middleware");
const upload = uploadFile("client-logos");

router.get("/", clientBrandController.index); // index
router.post("/", upload.single("image"), clientBrandController.create);
router.get("/:id", clientBrandController.show); // show
router.put("/:id", upload.single("image"), clientBrandController.update); // edit then update
router.delete("/:id", clientBrandController.delete); // destroy

module.exports = router;
