const { NotAuthenticatedError } = require("../errors");
const { isValidToken } = require("../utils/jwt");

const authenticatedUser = (req, res, next) => {
  // TODO: attach token to request
  const token = req.token;

  if (!token) {
    throw new NotAuthenticatedError("Invalid Authentication");
  }
  const { name, userID, role } = isValidToken(token);
  req.user = { name, userID, role };
  next();
};
module.exports = authenticatedUser;
