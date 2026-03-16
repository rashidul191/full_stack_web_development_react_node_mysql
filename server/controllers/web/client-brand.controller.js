const { ClientBrand } = require("../../models/index.js");
const { sendSuccess } = require("../../utility/response.handle.js");
const { indexService, showService } = require("../../utility/curd.service.js");

module.exports.index = async (req, res, next) => {
  try {
    const data = await indexService(ClientBrand);

    sendSuccess(res, "Successfully found all data!!", data);
  } catch (error) {
    next(error);
  }
};

module.exports.show = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await showService(ClientBrand, id);

    sendSuccess(res, "Successfully found single data!!", data);
  } catch (error) {
    next(error);
  }
};