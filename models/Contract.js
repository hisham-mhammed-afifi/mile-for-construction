const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Types.ObjectId,
      ref: "Project",
      required: [true, "Project ID is Required"],
    },
    workerId: {
      type: mongoose.Types.ObjectId,
      ref: "Worker",
      required: [true, "Worker ID is Required"],
    },
    workerFile: {
      type: String,
      default: "file.pdf",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contract", contractSchema);
