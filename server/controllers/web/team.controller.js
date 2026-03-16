const { Team } = require("../../models/index.js");
const { sendSuccess } = require("../../utility/response.handle.js");
const { indexService, showService } = require("../../utility/curd.service.js");

module.exports.index = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;

    const data = await indexService(Team, {
      page,
      limit,
    });

    sendSuccess(res, "Successfully found all data!!", data);
  } catch (error) {
    next(error);
  }
};

module.exports.show = async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const data = await showService(Team, slug);
    sendSuccess(res, "Successfully found single data!!", data);
  } catch (error) {
    next(error);
  }
};