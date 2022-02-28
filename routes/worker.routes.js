const express = require("express");
const router = express.Router();
const { addWorker, getAllWorkers } = require("../controllers/worker.controller");

router.get("/get", getAllWorkers);
router.post("/add", addWorker);

module.exports = router;
