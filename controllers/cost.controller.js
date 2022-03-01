const Cost = require("../models/Cost");
const { NotFoundError } = require("../errors");

const addCost = async (req, res) => {
  const cost = await Cost.create(req.body);
  res.status(StatusCodes.CREATED).json({ cost });
};

const getAllCost = async (req, res) => {
  const costs = await Cost.find({});
  res.status(StatusCodes.OK).json({ costs });
};

const getSingleCost = async (req, res) => {
  const cost = await Cost.findOne({ _id: req.params.id });
  if (!cost) {
    throw new NotFoundError("Cost not found");
  }
  res.status(StatusCodes.OK).json({ cost });
};

const updateCost = async (req, res) => {
  const cost = await Cost.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ cost });
};

const deleteCost = async (req, res) => {
  const cost = await Cost.findOneAndDelete({ _id: req.params.id });
  if (!cost) {
    throw new NotFoundError("Cost not found");
  }
  res.status(StatusCodes.OK).json({ msg: "Deleted Successfully" });
};

module.exports = { addCost, getSingleCost, getAllCost, updateCost, deleteCost };
