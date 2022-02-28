const { type } = require("express/lib/response");
const mongoose = require("mongoose");

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
  },
});
