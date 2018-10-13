const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  project_image: { type: String }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;