const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");

router.get("/", blogController.getAllBlogs); // index
router.post("/", blogController.createBlog); // create
router.get("/:id", blogController.getBlogById); // show
router.put("/:id", blogController.updateBlog); // edit then update
router.delete("/:id", blogController.deleteBlog); // destroy

module.exports = router;
