const express = require("express");
const router = express.Router();
const {
  addProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");

router.post("/", addProject);
router.get("/", getAllProjects);
router.get("/:id", getProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
