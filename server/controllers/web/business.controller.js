const { BusinessSetting } = require("../../models/index.js");

const { sendSuccess } = require("../../utility/response.handle.js");

module.exports.index = async (req, res, next) => {
  try {
    const data = await BusinessSetting.findAll({});
    sendSuccess(res, "Find data successfully", data);
  } catch (error) {
    next(error);
  }
};
