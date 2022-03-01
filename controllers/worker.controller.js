const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const Worker = require("../models/Worker");

const addWorker = async (req, res) => {
  const worker = await Worker.create(req.body);
  res.status(StatusCodes.CREATED).json({ worker });
};

const getAllWorkers = async (req, res) => {
  const workers = await Worker.find({});
  res.status(StatusCodes.OK).json({ workers });
};
const getWorker = async (req, res) => {
  const worker = await Worker.findOne({ _id: req.params.id });
  if (!worker) {
    throw new NotFoundError("Worker not found");
  }
  res.status(StatusCodes.OK).json({ worker });
};
const updateWorker = async (req, res) => {
  const worker = await Worker.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ worker });
};
const deleteWorker = async (req, res) => {
  const worker = await Worker.findOneAndDelete({ _id: req.params.id });
  if (!worker) {
    throw new NotFoundError("Worker not found");
  }
  res.status(StatusCodes.OK).json({ msg: "Sucssefully Deleted" });
};
module.exports = {
  addWorker,
  getAllWorkers,
  getWorker,
  updateWorker,
  deleteWorker,
};
