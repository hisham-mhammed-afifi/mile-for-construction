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

module.exports = {
  addWorker,
  getAllWorkers,
};
