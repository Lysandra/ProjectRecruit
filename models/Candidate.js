const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  title: { type: String, required: true },
  emailAddress: { type: String, required: true },
  company: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String }
});

const Candidate = mongoose.model("Candidate", CandidateSchema);

module.exports = Candidate;