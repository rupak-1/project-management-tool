const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: {type: String},
    members: { type: [{ type: String, unique: true }] },
    manager: { type: String },
    tasks: {type: [{description: String, deadline: Date, status: Boolean}]}
    
  },
  { timestamps: true }
);

const projectModel = mongoose.model("projects", projectSchema)

module.exports = projectModel;