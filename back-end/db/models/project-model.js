const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    creator_id : {type: String},
    title: { type: String, required: true },
    description: {type: String},
    tasks: [{description: String, status: Boolean,title: String}],
    deadline: {type: Date}
  },
  { timestamps: true },{minimize:false}
);

const projectModel = mongoose.model("projects", projectSchema)

module.exports = projectModel;