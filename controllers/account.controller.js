const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const Account = require("../models/Account");

const addAccount = async (req, res) => {
  const account = await Account.create(req.body);
  res.status(StatusCodes.CREATED).json({ account });
};

const getAllAccounts = async (req, res) => {
  const account = await Account.find({});
  res.status(StatusCodes.OK).json({ account });
};
const getAccount = async (req, res) => {
  const account = await Account.find({ _id: req.params.id });
  console.log(req.params.id);
  if (!account) {
    throw new NotFoundError("Account not found");
  }
  res.status(StatusCodes.OK).json({ account });
};
const updateAccount = async (req, res) => {
  const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ account });
};
const deleteAccount = async (req, res) => {
  const account = await Account.findByIdAndDelete(id);
  if (!account) {
    throw new NotFoundError("Account not found");
  }
  res.status(StatusCodes.OK).json({ msg: "Sucssefully Deleted" });
};
module.exports = {
  addAccount,
  getAccount,
  getAllAccounts,
  updateAccount,
  deleteAccount,
};
