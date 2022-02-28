const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Types.ObjectId,
      ref: "Project",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", accountSchema);