const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Project name is Required"],
    },
    budget: {
      type: Number,
      required: [true, "Budget is required"],
    },
    description: {
      type: String,
      maxlength: 500,
    },
    thumbnail: {
      type: String,
      required: [true, "Project thumbnail is Required"],
      default: ["project.jpg"],
    },
    images: {
      type: [String],
      default: ["project.jpg"],
    },
    workerId: [{ type: mongoose.Types.ObjectId, ref: "Worker" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
