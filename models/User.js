// user model
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minlength: 8,
  },
  role: {
    type: String,
    emun: ["user", "admin"],
    default: "user",
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

module.exports = mongoose.model("User", userSchema);
