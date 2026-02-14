const { Blog } = require("../models");
module.exports.getAllBlogs = (req, res) => {
  res.send("Get all blogs");
};

module.exports.getBlogById = (req, res) => {
  res.send("Get blog by id");
};

module.exports.createBlog = async (req, res) => {
  const blog = req.body;

//   console.log(blog);
  await Blog.create(blog);
  res.send(blog, "Create blog");
};

module.exports.updateBlog = (req, res) => {
  res.send("Update blog");
};

module.exports.deleteBlog = (req, res) => {
  res.send("Delete blog");
};
