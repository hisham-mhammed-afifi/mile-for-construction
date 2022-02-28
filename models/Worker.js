const mongoose = require("mongoose");
const validators = require("validator");

const workerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    // address: {
    //   type: String,
    //   required: [true, "Address is Required"],
    //   maxlength: 100,
    // },
    // mobile: {
    //   type: Number,
    //   required: [true, "Mobile Number is Required"],
    //   validate: {
    //     validator: validators.isMobilePhone,
    //     message: "Invalid Mobile Number",
    //   },
    //   unique: true,
    // },
    // idNumber: {
    //   type: Number,
    //   required: [true, "ID is required"],
    //   length: 14,
    //   unique: true,
    // },
    // others: {
    //   type: Array,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Worker", workerSchema);
