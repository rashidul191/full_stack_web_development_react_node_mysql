const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/auth.controller");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const filePath = Date.now() + "-" + file.originalname;
    cb(null, filePath);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("avatar"), authController.register); // create

// router.get("/", authController.index); // index
// router.post("/", authController.create); // create
// router.get("/:id", authController.show); // show
// router.put("/:id", authController.update); // edit then update
// router.delete("/:id", authController.delete); // destroy

module.exports = router;
