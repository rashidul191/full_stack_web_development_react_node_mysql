const { Activity } = require("../../models/index.js");
const { sendSuccess } = require("../../utility/response.handle.js");

const {
  indexService,
  createService,
  showService,
  updateService,
  deleteService,
} = require("../../utility/curd.service.js");

module.exports.index = async (req, res, next) => {
  try {
    const result = await indexService(Activity);
    sendSuccess(res, "Find all data successful", result);
  } catch (error) {
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await createService(Activity, data);
    sendSuccess(res, "Successfully create Activity!", result);
  } catch (error) {
    next(error);
  }
};

module.exports.show = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await showService(Activity, id);
    sendSuccess(res, "Successfully found single data!!", result);
  } catch (error) {
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const record = await Activity.findByPk(id);
    if (!record) throw new Error("Record not found");

    const result = await updateService(Activity, id, data);

    sendSuccess(res, "Updated successfully!!", result);
  } catch (error) {
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const result = await deleteService(Activity, req.params.id);
    sendSuccess(res, "Delete successfully!!", result);
  } catch (error) {
    next(error);
  }
};
