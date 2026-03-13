const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/web/blog.controller");

router.get("/", blogController.index); // index
router.get("/:slug", blogController.show); // show


module.exports = router;
