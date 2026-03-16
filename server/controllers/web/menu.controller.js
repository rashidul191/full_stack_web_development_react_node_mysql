const { Menu, ContentManage } = require("../../models/index.js");

const { sendSuccess } = require("../../utility/response.handle.js");
const { indexService, showService } = require("../../utility/curd.service.js");

module.exports.index = async (req, res, next) => {
  try {
    const data = await indexService(Menu, {
      include: [
        {
          model: ContentManage,
          as: "posts",
        },
      ],
    });

    sendSuccess(res, "Successfully found all data!!", data);
  } catch (error) {
    next(error);
  }
};

module.exports.show = async (req, res, next) => {
  try {
    const column = req.params.slug;

    const data = await showService(Menu, column, {
      include: [
        {
          model: ContentManage,
          as: "posts",
        },
      ],
    });

    sendSuccess(res, "Successfully found single data!!", data);
  } catch (error) {
    next(error);
  }
};