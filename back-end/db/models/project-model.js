const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: {type: String},
    tasks: [{description: String, status: Boolean}],
    deadline: {type: Date}
  },
  { timestamps: true }
);

const projectModel = mongoose.model("projects", projectSchema)

module.exports = projectModel;