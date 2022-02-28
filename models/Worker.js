const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    address: {
      type: String,
      required: [true, "Address is Required"],
      maxlength: 100,
    },
    mobile: {
      type: Number,
      required: [true, "Mobile Number is Required"],
      unique: [true, "Mobile Number is Already Registered"],
    },
    nationalID: {
      type: Number,
      required: [true, "ID is required"],
      validate: {
        validator: function (val) {
          return val.toString().length === 14;
        },
        message: "NationalID Must be 14 numbers",
      },
      unique: true,
    },
    specialization: {
      type: mongoose.Types.ObjectId,
      ref: "Specialization",
      required: [true, "specialization is Required"],
    },
    others: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Worker", workerSchema);
