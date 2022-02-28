const mongoose = require("mongoose");

const projectWorkersSchema = new mongoose.Schema({
  workerId: { type: mongoose.Types.ObjectId, ref: "Worker" },
});

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
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
  image: {
    type: String,
    default: "project.jpg",
  },
  workerId: [projectWorkersSchema],
});

module.exports = mongoose.model("Project", projectSchema);
