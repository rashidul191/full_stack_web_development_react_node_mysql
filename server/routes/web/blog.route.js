const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/web/blog.controller");
const checkLogin = require("../../middleware/checkLogin");


router.get("/", checkLogin, blogController.index); // index
router.post("/", blogController.create); // create
router.get("/:id", blogController.show); // show
router.put("/:id", blogController.update); // edit then update
router.delete("/:id", blogController.delete); // destroy

module.exports = router;
