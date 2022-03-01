const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "something went wrong",
  };

  if (err.name === "ValidationError") {
    customError.msg = err.message;
    customError.statusCode = 400;
  }

  if (err.code && err.code === "11000") {
    customError.msg = `You entered Duplicated ${err.keyValue}`;
    customError.statusCode = 400;
  }

  if (err.name === "CastError") {
    customError.msg = `Not found`;
    customError.statusCode = 404;
  }

  res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
