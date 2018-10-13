const db = require("../models");

// Defining methods for the projectsController
module.exports = {
  findAll: function(req, res) {
    console.log("req" + req);
    console.log("res" + res);
    db.Project
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Project
      .findById(req.params.id)
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },
}; 
