const express = require("express");
const router = express.Router();

const {
  addAccount,
  getAccount,
  getAllAccounts,
  deleteAccount,
  updateAccount,
} = require("../controllers/account.controller");

router.get("/allaccounts", getAllAccounts);
router.get("/:id", getAccount);
router.post("/add", addAccount);
router.patch("/:id", updateAccount);
router.delete("/id", deleteAccount);

module.exports = router;