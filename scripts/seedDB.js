const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/projectrecruit"
);

const recruiterSeed = [
  {
    first_name: "Jan",
    last_name: "Janison",
    email_address: "janjanison@email.com",
    company: "Janison, Inc.",
    phone: "(555) 555-5555",
    website: "www.janison.com"
  },
  {
    first_name: "Sam",
    last_name: "Samison",
    email_address: "samsamison@email.com",
    company: "Samison, Inc.",
    phone: "(555) 555-5555",
    website: "www.samison.com"
  }
];

db.Recruiter
  .remove({})
  .then(() => db.Recruiter.collection.insertMany(recruiterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
