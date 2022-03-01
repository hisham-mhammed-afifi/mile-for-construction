const express = require("express");
const router = express.Router();
const {
  addSpecialization,
  getAllSpecializations,
  getSpecialization,
  updateSpecialization,
  deleteSpecialization,
} = require("../controllers/specialization.controller");

router.post("/", addSpecialization);
router.get("/:id", getSpecialization);
router.patch("/:id", updateSpecialization);
router.delete("/:id", deleteSpecialization);
router.get("/", getAllSpecializations);

module.exports = router;
