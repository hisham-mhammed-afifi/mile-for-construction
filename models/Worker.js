const mongoose = require("mongoose");
const validators = require("validator");

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
      unique: true,
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
    others: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Worker", workerSchema);
