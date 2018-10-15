const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  project_name: { type: String, required: true },
  project_image: { type: String, required: true }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;