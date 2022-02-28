const Project = require("../models/Project");

const addProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).send(project);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getAllProjects = async (req, res) => {
  try {
    const project = await Project.find({});
    res.status(200).send(project);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const getProject = async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });
    if (!project) {
      return res.status(404).send("Project Not Found");
    }
    res.status(200).send(project);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).send(project);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.params.id });
    if (!project) {
      return res.status(404).send("Project Not Found");
    }
    res.status(200).send("Sucssefully Deleted");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  addProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
};
