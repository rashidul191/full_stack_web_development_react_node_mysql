const { Blog } = require("../models");
module.exports.getAllBlogs = async (req, res) => {

  const data = await Blog.findAll();

  // console.log(data);
  res.json(data);
};

module.exports.createBlog = async (req, res) => {
  const blog = req.body;

  //   console.log(blog);
  await Blog.create(blog);
  res.send(blog, "Create blog");
};

module.exports.getBlogById = (req, res) => {
  res.send("Get blog by id");
};

module.exports.updateBlog = (req, res) => {
  res.send("Update blog");
};

module.exports.deleteBlog = (req, res) => {
  res.send("Delete blog");
};
