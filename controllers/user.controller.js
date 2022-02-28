const User = require("../models/User");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

// user controller

const register = async (req, res) => {
  const { name, email, password } = req.body;
  //   check if email is already exist
  const isExist = await User.findOne({ email });
  if (isExist) {
    throw new BadRequestError("Email is already exist");
  }
  //   check if it is first account or not
  const isFirst = (await User.countDocuments({})) === 0;
  const role = isFirst ? "admin" : "user";

  const user = await User.create({
    name,
    email,
    password,
    role,
  });
  res.status(StatusCodes.CREATED).json({ user });
};

module.exports = { register };
