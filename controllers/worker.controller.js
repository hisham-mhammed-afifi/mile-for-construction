const Worker = require("../models/Worker");

const addWorker = async (req, res) => {
  try {
    const worker = await Worker.create(req.body);
    res.status(201).send(worker);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getAllWorkers = async (req, res) => {
  try {
    const workers = await Worker.find({});
    res.status(200).send(workers);
  } catch (err) {
    res.status(404).send(err.message);
  }
};
const getWorker = async (req, res) => {
  try {
    const worker = await Worker.findOne({ _id: req.params.id });
    if (!worker) {
      return res.status(404).send("Worker Not Found");
    }
    res.status(200).send(worker);
  } catch (err) {
    res.status(404).send(err.message);
  }
};
const updateWorker = async (req, res) => {
  try {
    const worker = await Worker.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).send(worker);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
const deleteWorker = async (req, res) => {
  try {
    const worker = await Worker.findOneAndDelete({ _id: req.params.id });
    if (!worker) {
      return res.status(404).send("Worker Not Found");
    }
    res.status(200).send("Sucssefully Deleted");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
module.exports = {
  addWorker,
  getAllWorkers,
  getWorker,
  updateWorker,
  deleteWorker,
};
