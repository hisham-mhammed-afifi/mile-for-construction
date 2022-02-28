const Contract = require("../models/Contract");

const addContract = async (req, res) => {
  try {
    const contract = await Contract.create(req.body);
    res.status(201).send(contract);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getAllContract = async (req, res) => {
  try {
    const contract = await Contract.find({});
    res.status(201).send(contract);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getSingleContract = async (req, res) => {
  try {
    const contract = await Contract.findOne({ _id: req.params.id });
    if (!contract) {
      res.status(404).send("Contract Not Found");
    }
    res.status(201).send(contract);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateContract = async (req, res) => {
  try {
    const contract = await Contract.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!contract) {
      return res.status(404).send("Contract Not Found");
    }
    res.status(201).send(contract);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
const deleteContract = async (req, res) => {
  try {
    const contract = await Contract.findByIdAndDelete({ _id: req.params.id });
    if (!contract) {
      return res.status(404).send("Contract Not Found");
    }
    res.status(201).send("Contract Has Been Deleted Successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  addContract,
  getAllContract,
  getSingleContract,
  updateContract,
  deleteContract,
};
