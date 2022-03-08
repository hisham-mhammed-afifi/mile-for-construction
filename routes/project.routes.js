const express = require("express");
const router = express.Router();
const {
  addProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
  uploadImage,
} = require("../controllers/project.controller");

router.post("/", addProject);
router.get("/:id", getProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);
router.get("/", getAllProjects);
router.post("/uploadImage", uploadImage);

module.exports = router;
