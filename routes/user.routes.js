// user routes
const { authenticatedUser } = require("../middlewares/auth");
const express = require("express");
const router = express.Router();
const {
  register,
  login,
  isAvailableEmail,
  getAllUsers,
  getSingleUsers,
  profile,
} = require("../controllers/user.controller");
router.post("/register", register);
router.post("/login", login);
router.post("/isAvailabel", isAvailableEmail);
router.get("/profile", authenticatedUser, profile);
router.get("/:id", getSingleUsers);
router.get("/", getAllUsers);

module.exports = router;
