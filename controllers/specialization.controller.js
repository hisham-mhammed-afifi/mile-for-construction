const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const Specialization = require("../models/Specialization");

const addSpecialization = async (req, res) => {
  const specialization = await Specialization.create(req.body);
  res.status(StatusCodes.CREATED).json({ specialization });
};

const getAllSpecializations = async (req, res) => {
  const specializations = await Specialization.find({});
  res.status(StatusCodes.OK).json({ specializations });
};

const getSpecialization = async (req, res) => {
  const specialization = await Specialization.findOne({ _id: req.params.id });
  if (!specialization) {
    throw new NotFoundError("Specialization Not Found");
  }
  res.status(StatusCodes.OK).json({ specialization });
};

const updateSpecialization = async (req, res) => {
  const specialization = await Specialization.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ specialization });
};

const deleteSpecialization = async (req, res) => {
  const specialization = await Specialization.findOneAndDelete({
    _id: req.params.id,
  });
  if (!specialization) {
    throw new NotFoundError("Specialization Not Found");
  }
  res.status(StatusCodes.OK).json({ msg: "Sucssefully Deleted" });
};

module.exports = {
  addSpecialization,
  getAllSpecializations,
  getSpecialization,
  updateSpecialization,
  deleteSpecialization,
};
