const express = require("express");
const router = express.Router();

const {
  addCost,
  getSingleCost,
  getAllCost,
  updateCost,
  deleteCost,
  getSumProject,
} = require("../controllers/cost.controller");

router.post("/", addCost);
router.patch("/:id", updateCost);
router.delete("/:id", deleteCost);
router.get("/getsum", getSumProject);
router.get("/:id", getSingleCost);
router.get("/", getAllCost);

module.exports = router;
