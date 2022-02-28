const User = require("../models/User");
const {
  BadRequestError,
  NotAuthenticatedError,
  ConflictError,
} = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { createJWT, isValidToken } = require("../utils/jwt");

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

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotAuthenticatedError("invalid email");
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new NotAuthenticatedError("invalid email or password");
  }

  const token = createJWT({
    userID: user._id,
    email: user.email,
    role: user.role,
  });
  // pass token to frontend to be handled there.
  res.status(StatusCodes.OK).json({ token });
};

// check if email is already exist or not when register.
const isAvailableEmail = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(StatusCodes.CONFLICT).json({ available: false });
  }
  res.status(StatusCodes.OK).json({ available: true });
};

const getAllUsers = async (req, res) => {
  const users = await User.find({}).select("-password");
  res.status(StatusCodes.OK).json({ users });
};
const getSingleUsers = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(StatusCodes.OK).json({ user });
};
const profile = async (req, res) => {
  const user = isValidToken(req.user);
  res.status(StatusCodes.OK).json({ user });
};

module.exports = {
  register,
  login,
  isAvailableEmail,
  getAllUsers,
  getSingleUsers,
  profile,
};
