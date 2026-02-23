const express = require("express");
const router = express.Router();
const adminAuthController = require("../../../controllers/admin/auth/auth.controller");

router.get("/", adminAuthController.login);

// router.get("/", blogController.index); // index
// router.post("/", blogController.create); // create
// router.get("/:id", blogController.show); // show
// router.put("/:id", blogController.update); // edit then update
// router.delete("/:id", blogController.delete); // destroy

module.exports = router;
