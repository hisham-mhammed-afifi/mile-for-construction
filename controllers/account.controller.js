const Account = require("../models/Account");
const Worker = require("../models/Worker");

const addAccount = async (req, res) => {
  try {
    const account = await Account.create(req.body);
    res.status(201).send(account);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getAllAccounts = async (req, res) => {
  try {
    const account = await Account.find({});
    res.status(200).send(account);
  } catch (err) {
    res.status(404).send(err.message);
  }
};
const getAccount = async (req, res) => {
  try {
    const account = await Account.find({ _id: req.params.id });
    console.log(req.params.id);
    if (!account) {
      return res.status(404).send("account Not Found");
    }
    res.status(200).send(account);
  } catch (err) {
    res.status(404).send(err.message);
  }
};
const updateAccount = async (req, res) => {
  try {
    const account = await Worker.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).send(worker);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
const deleteAccount = async (req, res) => {
  try {
    const account = await Worker.findByIdAndDelete(id);
    if (!account) {
      res.status(404).send("account Not Found");
    }
    res.status(200).send("Sucssefully Deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  addAccount,
  getAccount,
  getAllAccounts,
  updateAccount,
  deleteAccount,
};
