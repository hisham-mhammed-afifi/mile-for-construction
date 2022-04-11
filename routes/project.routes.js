const express = require("express");
const router = express.Router();
const {
  addProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
  uploadImage,
  previewImagesInLandingPage,
} = require("../controllers/project.controller");
const { authenticatedUser } = require("../middlewares/auth");

router.post("/", authenticatedUser, addProject);
router.get("/homeimages", previewImagesInLandingPage);
router.get("/:id", getProject);
router.patch("/:id", authenticatedUser, updateProject);
router.delete("/:id", authenticatedUser, deleteProject);
router.get("/", getAllProjects);
router.post("/uploadImage", uploadImage);

module.exports = router;
