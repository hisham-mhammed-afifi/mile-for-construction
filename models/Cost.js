const mongoose = require("mongoose");

const constSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Types.ObjectId,
      ref: "Project",
    },
    amount: {
      type: Number,
      required: [true, "Cost is Required"],
    },
    notes: {
      type: Array,
      maxlength: 100,
    },
  },
  { timestamps: true }
);
