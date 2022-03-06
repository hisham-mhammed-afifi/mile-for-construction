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

router.get("/allWorkers", getAllWorkers);
router.post("/add", addWorker);
router.post("/:id/asignProject", asignProject);
router.get("/:id", getWorker);
router.patch("/:id", updateWorker);
router.delete("/:id", deleteWorker);

module.exports = router;
