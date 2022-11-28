const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: {type: String},
    members: { type: [{ type: String, unique: true }] },
    manager: { type: String },
    
  },
  { timestamps: true }
);

const projectModel = mongoose.model("projects", projectSchema)

module.exports = projectModel;