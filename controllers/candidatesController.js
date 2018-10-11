const db = require("../models");

// Defining methods for the candidateController
module.exports = {
  findAll: function(req, res) {
    console.log("req" + req);
    console.log("res" + res);
    db.Candidate
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {
        console.log(dbModel)
        return res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
}; 
