const sendSuccess = (res, message, data = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    status: "success",
    statusCode,
    message,
    data,
  });
};

const sendError = (res, message, error = {}, statusCode = 400) => {
  return res.status(statusCode).json({
    status: "fail",
    statusCode,
    message,
    error: error.message || error,
  });
};

module.exports = {
  sendSuccess,
  sendError,
};
