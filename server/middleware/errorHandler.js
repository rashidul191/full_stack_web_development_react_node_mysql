const { sendError } = require("../utility/response.handle");

const errorHandler = (err, req, res, next) => {
  console.error(err);
  sendError(
    res,
    err.message || "Internal Server Error",
    err,
    err.status || 500,
  );
};

module.exports = errorHandler;
