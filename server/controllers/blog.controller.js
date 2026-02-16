const { Blog } = require("../models");

const { sendSuccess, sendError } = require("../utility/response.handle.js");

const {
  indexService,
  createService,
  showService,
  updateService,
  deleteService,
} = require("../utility/curd.service.js");
module.exports.index = async (req, res) => {
  try {
    const data = await indexService(Blog);
    sendSuccess(res, "Successfully found all data!!", data);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const data = await createService(Blog, req.body);
    sendSuccess(res, "Successfully create data!!", data);
  } catch (error) {
    next();
    sendError(res, "Can't create data!!", error);
  }
};

module.exports.show = async (req, res) => {
  try {
    // const data = await Blog.findByPk(req.params.id);
    const data = await showService(Blog, req.params.id);
    sendSuccess(res, "Successfully found single data!!", data);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.update = (req, res) => {
  res.send("Update blog");
};

module.exports.delete = (req, res) => {
  res.send("Delete blog");
};
