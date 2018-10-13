const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  linkedIn: { type: String, required: true },
  userId: {type: String, required: true },
  profileUrl: {type: String, required: true }
  
});

const Candidate = mongoose.model("Candidate", CandidateSchema);

module.exports = Candidate;