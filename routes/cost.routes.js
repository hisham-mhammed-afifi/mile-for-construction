const express = require("express");
const router = express.Router();

const { addCost, getSingleCost, getAllCost } = require("../controllers/cost.controller");

router.post("/", addCost);
router.get("/:id", getSingleCost);
router.get("/", getAllCost);

module.exports = router;
