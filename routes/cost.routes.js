const express = require("express");
const router = express.Router();

const { addCost, getSingleCost, getAllCost, updateCost, deleteCost } = require("../controllers/cost.controller");

router.post("/", addCost);
router.get("/:id", getSingleCost);
router.get("/", getAllCost);
router.patch("/:id", updateCost);
router.delete("/:id",deleteCost)

module.exports = router;
