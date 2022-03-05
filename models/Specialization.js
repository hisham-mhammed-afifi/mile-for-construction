const mongoose = require("mongoose");

const specializationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  type: {
    type: String,
    unique: true,
    required: [true, "Type is Required"],
  },
  workerId: [{ type: mongoose.Types.ObjectId, ref: "Worker" }],
});

module.exports = mongoose.model("Specialization", specializationSchema);
