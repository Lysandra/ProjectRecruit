const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  project_name: { type: String },
  project_image: { type: String }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;