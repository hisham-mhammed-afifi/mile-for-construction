const express = require("express");
const router = express.Router();
const {
  addSpecialization,
  getAllSpecializations,
  getSpecialization,
  updateSpecialization,
  deleteSpecialization,
} = require("../controllers/specialization.controller");
const { authenticatedUser } = require("../middlewares/auth");

router.post("/", authenticatedUser, addSpecialization);
router.get("/:id", authenticatedUser, getSpecialization);
router.patch("/:id", authenticatedUser, updateSpecialization);
router.delete("/:id", authenticatedUser, deleteSpecialization);
router.get("/", authenticatedUser, getAllSpecializations);

module.exports = router;
