const { NotAuthenticatedError } = require("../errors");

const authenticatedUser = (req, res, next) => {
  // TODO: attach token to request
  const token = req.token;

  if (!token) {
    throw new NotAuthenticatedError("Invalid Authentication");
  }
};
