const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");

router.get("/", blogController.index); // index
router.post("/", blogController.create); // create
router.get("/:id", blogController.show); // show
router.put("/:id", blogController.update); // edit then update
router.delete("/:id", blogController.delete); // destroy

module.exports = router;
