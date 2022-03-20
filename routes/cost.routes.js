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
const { authenticatedUser } = require("../middlewares/auth");

router.post("/", authenticatedUser, addCost);
router.patch("/:id", authenticatedUser, updateCost);
router.delete("/:id", authenticatedUser, deleteCost);
router.get("/getsum", authenticatedUser, getSumProject);
router.get("/:id", authenticatedUser, getSingleCost);
router.get("/", authenticatedUser, getAllCost);

module.exports = router;
