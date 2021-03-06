const mongoose = require("mongoose");

const costSchema = new mongoose.Schema(
  {
    workerId: {
      type: mongoose.Types.ObjectId,
      ref: "Worker",
      required: [true, "Worker ID is Required"],
    },
    projectId: {
      type: mongoose.Types.ObjectId,
      ref: "Project",
      required: [true, "Project ID is Required"],
    },
    amount: {
      type: Number,
      required: [true, "Cost is Required"],
    },
    notes: {
      type: String,
      maxlength: 500,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

costSchema.virtual("project", {
  ref: "Project",
  localField: "projectId",
  foreignField: "_id",
  justOne: true,
});

costSchema.virtual("worker", {
  ref: "Worker",
  localField: "workerId",
  foreignField: "_id",
  justOne: true,
});

module.exports = mongoose.model("Cost", costSchema);
