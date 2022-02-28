const JWT = require("jsonwebtoken");

const createJWT = (payload) => {
  const token = JWT.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

const isValidToken = (token) => {
  return JWT.verify(token, process.env.JWT_SECRET);
};

module.exports = { createJWT, isValidToken };
