const { NotAuthenticatedError } = require("../errors");

const authenticatedUser = async (req, res, next) => {
  let token;

  // check header
  const authHeader = req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    throw new NotAuthenticatedError("invalid Authentication");
  }

  next();
};
