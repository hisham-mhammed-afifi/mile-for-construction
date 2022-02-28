const { NotAuthenticatedError } = require("../errors");
const { isValidToken } = require("../utils/jwt");

const authenticatedUser = async (req, res, next) => {
  let token;
  // check header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }
  if (!token) {
    throw new NotAuthenticatedError("invalid Authentication");
  }
  console.log("token", token);
  const user = isValidToken({ token });
  console.log(user);
  req.user = { userID: user.userID, role: user.role };

  next();
};

module.exports = { authenticatedUser };
