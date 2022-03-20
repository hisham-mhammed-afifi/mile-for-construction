const express = require("express");
const router = express.Router();
const {
  addWorker,
  getAllWorkers,
  getWorker,
  updateWorker,
  deleteWorker,
  asignProject,
} = require("../controllers/worker.controller");
const { authenticatedUser } = require("../middlewares/auth");

router.get("/allWorkers", authenticatedUser, getAllWorkers);
router.post("/add", authenticatedUser, addWorker);
router.post("/:id/asignProject", authenticatedUser, asignProject);
router.get("/:id", authenticatedUser, getWorker);
router.patch("/:id", authenticatedUser, updateWorker);
router.delete("/:id", authenticatedUser, deleteWorker);

module.exports = router;
