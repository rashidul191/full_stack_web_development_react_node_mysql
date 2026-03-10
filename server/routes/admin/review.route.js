const express = require("express");
const router = express.Router();
const reviewController = require("../../controllers/admin/review.controller");
const uploadFile = require("../../middleware/upload.middleware");
const upload = uploadFile("reviews");

router.get("/", reviewController.index); // index
router.post("/", upload.single("image"), reviewController.create);
router.get("/:id", reviewController.show); // show
router.put("/:id", upload.single("image"), reviewController.update); // edit then update
router.delete("/:id", reviewController.delete); // destroy

module.exports = router;
