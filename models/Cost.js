const mongoose = require("mongoose");

const costSchema = new mongoose.Schema(
  {
    workerId: {
      type: mongoose.Types.ObjectId,
      ref: "Worker",
      required: [true, "Worker ID is Required"],
    },
    amount: {
      type: Number,
      required: [true, "Cost is Required"],
    },
    notes: {
      type: String,
      maxlength: 500,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cost", costSchema);
