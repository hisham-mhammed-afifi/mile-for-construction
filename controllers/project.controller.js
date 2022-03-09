const Project = require("../models/Project");
const cloudinary = require("cloudinary").v2;
const Account = require("../models/Account");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const addProject = async (req, res) => {
  const project = await Project.create(req.body);
  const account = await Account.create({
    projectName: project.name,
    projectId: project._id,
  });
  res.status(StatusCodes.CREATED).json({ project, account });
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

const uploadImage = async (req, res) => {
  // console.log(req.files.images);
  let result = [];
  for (let image of req.files.images) {
    const p = await cloudinary.uploader.upload(image.tempFilePath, {
      use_filename: true,
      folder: "mile-files",
    });
    result.push(p.secure_url);
  }

  res.status(200).send({
    images: result,
  });
};

module.exports = {
  addProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
  uploadImage,
};
