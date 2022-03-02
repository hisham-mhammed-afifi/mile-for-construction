const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Types.ObjectId,
      ref: "Project",
    },
    projectName: {
      type: String,
      required: [true, "Account name is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", accountSchema);
