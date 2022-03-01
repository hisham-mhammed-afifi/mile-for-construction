const express = require("express");
const router = express.Router();
const {
  addWorker,
  getAllWorkers,
  getWorker,
  updateWorker,
  deleteWorker,
} = require("../controllers/worker.controller");

router.get("/allWorkers", getAllWorkers);
router.post("/add", addWorker);
router.get("/:id", getWorker);
router.patch("/:id", updateWorker);
router.delete("/:id", deleteWorker);


module.exports = router;
