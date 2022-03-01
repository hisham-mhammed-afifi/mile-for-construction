const Contract = require("../models/Contract");
const { NotFoundError } = require("../errors");

const addContract = async (req, res) => {
  const contract = await Contract.create(req.body);
  res.status(StatusCodes.CREATED).json({ contract });
};

const getAllContract = async (req, res) => {
  const contracts = await Contract.find({});
  res.status(StatusCodes.OK).json({ contracts });
};

const getSingleContract = async (req, res) => {
  const contract = await Contract.findOne({ _id: req.params.id });
  if (!contract) {
    throw new NotFoundError("Contract not found");
  }
  res.status(StatusCodes.OK).json({ contract });
};

const updateContract = async (req, res) => {
  const contract = await Contract.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!contract) {
    throw new NotFoundError("Contract not found");
  }
  res.status(StatusCodes.OK).json({ contract });
};
const deleteContract = async (req, res) => {
  const contract = await Contract.findByIdAndDelete({ _id: req.params.id });
  if (!contract) {
    throw new NotFoundError("Contract not found");
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "Contract Has Been Deleted Successfully" });
};

module.exports = {
  addContract,
  getAllContract,
  getSingleContract,
  updateContract,
  deleteContract,
};
