const CustomError = require("./custom-error");
const BadRequestError = require("./bad-request");
const NotFoundError = require("./not-found");
const NotAuthenticatedError = require("./not-authenticated");
const NotAuthorizedError = require("./not-authorized");

module.exports = {
  CustomError,
  BadRequestError,
  NotFoundError,
  NotAuthenticatedError,
  NotAuthorizedError,
};
