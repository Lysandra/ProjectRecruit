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
    project_image: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiw3Oix04PeAhVmk-AKHfB-AtEQjRx6BAgBEAU&url=https%3A%2F%2Fbookboon.com%2Fblog%2F2013%2F05%2Fproject-launch-stage-how-to-get-a-project-properly-running%2F&psig=AOvVaw2fBFppWNO0g3Ddh322IFeo&ust=1539528141701759"
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
