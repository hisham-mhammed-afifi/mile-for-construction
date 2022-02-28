const express = require("express")
const router = express.Router()
const {
    addSpecialization,
    getAllSpecializations,
    getSpecialization,
    updateSpecialization,
    deleteSpecialization
}= require ("../controllers/specialization.controller")

router.post("/add", addSpecialization)
router.get("/allSpecializations", getAllSpecializations)
router.get("/:id", getSpecialization)
router.patch("/:id", updateSpecialization)
router.delete("/:id", deleteSpecialization)

module.exports = router