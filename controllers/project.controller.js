const Project = require("../models/Project");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const addProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(StatusCodes.CREATED).json({ project });
};

const getAllProjects = async (req, res) => {
  const projects = await Project.find({});
  res.status(StatusCodes.OK).json({ projects });
};

const getProject = async (req, res) => {
  const project = await Project.findOne({ _id: req.params.id });
  if (!project) {
    throw new NotFoundError("Project not found");
  }
  res.status(StatusCodes.OK).json({ project });
};

const updateProject = async (req, res) => {
  const project = await Project.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ project });
};

const deleteProject = async (req, res) => {
  const project = await Project.findOneAndDelete({ _id: req.params.id });
  if (!project) {
    throw new NotFoundError("Project not found");
  }
  res.status(StatusCodes.OK).json({ msg: "Sucssefully Deleted" });
};

module.exports = {
  addProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
};
