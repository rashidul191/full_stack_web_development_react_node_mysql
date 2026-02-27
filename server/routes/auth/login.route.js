const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/auth.controller");

router.post("/", authController.login);

// router.get("/", blogController.index); // index
// router.post("/", blogController.create); // create
// router.get("/:id", blogController.show); // show
// router.put("/:id", blogController.update); // edit then update
// router.delete("/:id", blogController.delete); // destroy

module.exports = router;
