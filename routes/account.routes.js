const express = require("express");
const router = express.Router();

const {
  addAccount,
  getAccount,
  getAllAccounts,
  deleteAccount,
  updateAccount,
} = require("../controllers/account.controller");
const { authenticatedUser } = require("../middlewares/auth");

router.get("/allaccounts", getAllAccounts);
router.get("/:id", authenticatedUser, getAccount);
router.post("/add", authenticatedUser, addAccount);
router.patch("/:id", authenticatedUser, updateAccount);
router.delete("/id", authenticatedUser, deleteAccount);

module.exports = router;
