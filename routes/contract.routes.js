const express = require("express");
const router = express.Router();

const {
  addContract,
  getAllContract,
  getSingleContract,
  updateContract,
  deleteContract,
} = require("../controllers/contract.controller");

router.get("/", getAllContract);
router.post("/", addContract);
router.get("/:id", getSingleContract);
router.patch("/:id", updateContract);
router.delete("/:id", deleteContract);

module.exports = router;
