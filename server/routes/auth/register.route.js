const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/auth.controller");
const uploadFile = require("../../middleware/upload.middleware");

const upload = uploadFile("users");


/* const multer = require("multer");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const filePath = "public/uploads/";
    fs.mkdirSync(filePath, { recursive: true }); // auto create folder like: public/uploads/
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    const filePath = Date.now() + "-" + file.originalname;
    cb(null, filePath);
  },
});
const upload = multer({ storage: storage }); */

router.post("/", upload.single("avatar"), authController.register); // create
router.put("/:id", upload.single("avatar"), authController.update); // create


// router.get("/", authController.index); // index
// router.post("/", authController.create); // create
// router.get("/:id", authController.show); // show
// router.put("/:id", authController.update); // edit then update
// router.delete("/:id", authController.delete); // destroy

module.exports = router;
