const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/projectrecruit"
);

const candidateSeed = [
  {
    firstName: "Jennifer",
    lastName: "Carr",
    title: "Software Engineer ",
    email: "jennifercarr@gmail.com",
    phoneNumber: "407-717-9056",
    linkedIn: "www.google.com",
    projectImage: "",
    projectName: "Food Foodie",
    summary: "This is my summary",
    projectLink: "www.gmail.com"
  },
  {
    firstName: "Jennifer",
    lastName: "Carr",
    title: "Software Engineer ",
    email: "jennifercarr@gmail.com",
    phoneNumber: "407-717-9056",
    linkedIn: "www.google.com",
    projectImage: "",
    projectName: "Food Foodie",
    summary: "This is my summary",
    projectLink: "www.gmail.com"
  }
];

db.Candidate
  .remove({})
  .then(() => db.Candidate.collection.insertMany(candidateSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
