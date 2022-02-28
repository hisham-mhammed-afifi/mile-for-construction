const mongoose = require("mongoose");

const specializationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  type: {
    type: String,
    required: [true, "Type is Required"],
  },
});

module.exports = mongoose.model("Specialization", specializationSchema);
