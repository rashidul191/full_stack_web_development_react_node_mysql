const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/auth.controller");

router.post("/", authController.register); // create


// router.get("/", authController.index); // index
// router.post("/", authController.create); // create
// router.get("/:id", authController.show); // show
// router.put("/:id", authController.update); // edit then update
// router.delete("/:id", authController.delete); // destroy

module.exports = router;
