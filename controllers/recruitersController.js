const db = require("../models");

// Defining methods for the recruitersController
module.exports = {
  findAll: function(req, res) {
    console.log("req" + req);
    console.log("res" + res);
    db.Recruiter
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Recruiter
      .findById(req.params.id)
      .then(dbRecruiter => res.json(dbRecruiter))
      .catch(err => res.status(422).json(err));
  },
}; 
