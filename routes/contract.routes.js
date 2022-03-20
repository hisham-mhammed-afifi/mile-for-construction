const express = require("express");
const router = express.Router();

const {
  addContract,
  getAllContract,
  getSingleContract,
  updateContract,
  deleteContract,
} = require("../controllers/contract.controller");
const { authenticatedUser } = require("../middlewares/auth");

router.post("/", authenticatedUser, addContract);
router.get("/:id", authenticatedUser, getSingleContract);
router.patch("/:id", authenticatedUser, updateContract);
router.delete("/:id", authenticatedUser, deleteContract);
router.get("/", authenticatedUser, getAllContract);

module.exports = router;
