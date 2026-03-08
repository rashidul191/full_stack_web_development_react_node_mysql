const express = require("express");
const router = express.Router();
const businessController = require("../../controllers/admin/business.controller");
const uploadFile = require("../../middleware/upload.middleware");
const upload = uploadFile("business-settings");

router.get("/", businessController.index); // index
router.post("/", upload.any(), businessController.update);

// router.get("/", blogController.index); // index
// router.post("/", blogController.create); // create
// router.get("/:id", blogController.show); // show
// router.put("/:id", blogController.update); // edit then update
// router.delete("/:id", blogController.delete); // destroy

module.exports = router;
