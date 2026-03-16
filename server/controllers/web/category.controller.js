const { Blog, Category } = require("../../models/index.js");

const { sendSuccess } = require("../../utility/response.handle.js");
const { indexService, showService } = require("../../utility/curd.service.js");

module.exports.index = async (req, res, next) => {
  try {
    const data = await indexService(Category, {
      include: [
        {
          model: Blog,
          attributes: ["id", "title"],
          as: "blogs",
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
    const slug = req.params.slug;

    const data = await showService(Blog, slug, {
      include: [
        {
          model: Category,
          attributes: ["id", "name"],
          as: "category",
        },
      ],
    });

    sendSuccess(res, "Successfully found single data!!", data);
  } catch (error) {
    next(error);
  }
};
