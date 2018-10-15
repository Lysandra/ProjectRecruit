const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  project_name: { type: String },
  data: { type: Buffer },
  contentType: { type: String }
});

const Project = mongoose.model("Project", projectSchema);
var imgPath = "/../../../public/img/project1.jpg"

module.exports = Project;