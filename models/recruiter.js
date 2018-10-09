const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email_address: { type: String, required: true },
  company: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String }
});

const Recruiter = mongoose.model("Recruiter", recruiterSchema);

module.exports = Recruiter;