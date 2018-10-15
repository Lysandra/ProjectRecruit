const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/projectrecruit"
);

const projectSeed = [
  {
    project_name: "Project 1",
    project_image: "../img/project1.jpg"
  },
  {
    project_name: "Project 2",
    project_image: "../img/project2.jpg"
  },
  {
    project_name: "Project 3",
    project_image: "../img/project3.jpg"
  },
  {
    project_name: "Project 4",
    project_image: "../img/project4.jpg"
  },
  {
    project_name: "Project 5",
    project_image: "../img/project5.jpg"
  },
  {
    project_name: "Project 6",
    project_image: "../img/project6.jpg"
  },
  {
    project_name: "Project 7",
    project_image: "../img/project7.png"
  },
  {
    project_name: "Project 8",
    project_image: "../img/project8.jpg"
  },
  {
    project_name: "Project 9",
    project_image: "../img/project9.jpg"
  },
  {
    project_name: "Project 10",
    project_image: "../img/project10.jpg"
  },
  {
    project_name: "Project 11",
    project_image: "../img/project11.jpg"
  },
  {
    project_name: "Project 12",
    project_image: "../img/project12.jpg"
  }
];

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
