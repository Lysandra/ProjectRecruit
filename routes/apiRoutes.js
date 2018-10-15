const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../models');
const recruitersController = require("../controllers/recruitersController");
const projectsController = require("../controllers/projectsController");
const candidatesController = require("../controllers/candidatesController");
const mustBeLoggedIn = require('../shared/middleware/mustBeLoggedIn');

function getCurrentUser(req, res) {
  // I'm picking only the specific fields its OK for the audience to see publicly
  // never send the whole user object in the response, and only show things it's OK
  // for others to read (like ID, name, email address, etc.)
  const { id, email } = req.user;
  res.json({
    id, email
  });
}

router.route('/auth')
  // GET to /api/auth will return current logged in user info
  .get((req, res) => {
    console.log(req.user)
    if (!req.user) {
      return res.status(401).json({
        message: 'You are not currently logged in.'
      })
    }

    getCurrentUser(req, res);
  })
  // POST to /api/auth with username and password will authenticate the user
  .post(passport.authenticate('local'), (req, res) => {
    console.log(req.user)
    if (!req.user) {
      return res.status(401).json({
        message: 'Invalid email or password.'
      })
    }

    getCurrentUser(req, res);
  })
  // DELETE to /api/auth will log the user out
  .delete((req, res) => {
    req.logout();
    req.session.destroy();
    res.json({
      message: 'You have been logged out.'
    });
  });

router.route('/users/candidate')
  .get((req, res, next) => {
    db.Candidate.find({
      where: {
        email: req.user.email
      }
    })
    .then(candidate => {
      res.json(candidate)
      
    })
    .catch(err =>{
      console.log(error)
    })
  })
  // POST to /api/users will create a new user
  .post((req, res, next) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(user => {
        console.log(user)
        const { id, email } = user;
        db.Candidate.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          position: req.body.position,
          email: req.body.email,
          phone: req.body.phone,
          linkedIn: req.body.linkedIn,
          profileUrl: req.body.profileUrl,
          userId: id
        })
          .then(candidate => {
            console.log(candidate)
            res.json({
              id, email
            });
          })
        
      })
      .catch(err => {
        // if this error code is thrown, that means the username already exists.
        // let's handle that nicely by redirecting them back to the create screen
        // with that flash message
        if (err.code === 11000) {
          res.status(400).json({
            message: 'Email already in use.'
          })
        }

        // otherwise, it's some nasty unexpected error, so we'll just send it off to
        // to the next middleware to handle the error.
        next(err);
      });
  });


router.route('/users/recruiter')
// POST to /api/users will create a new user
.post((req, res, next) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(user => {
      console.log(user)
      const { id, email } = user;
      db.Recruiter.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        company: req.body.company,
        phone: req.body.phone,
        website: req.body.website,
        userId: id
      })
        .then(recruiter => {
          console.log(recruiter)
          res.json({
            id, email
          });
        })
      
    })
    .catch(err => {
      // if this error code is thrown, that means the username already exists.
      // let's handle that nicely by redirecting them back to the create screen
      // with that flash message
      if (err.code === 11000) {
        res.status(400).json({
          message: 'Email already in use.'
        })
      }

      // otherwise, it's some nasty unexpected error, so we'll just send it off to
      // to the next middleware to handle the error.
      next(err);
    });
});

// this route is just returns an array of strings if the user is logged in
// to demonstrate that we can ensure a user must be logged in to use a route
router.route('/stuff')
  .get(mustBeLoggedIn(), (req, res) => {
    // at this point we can assume the user is logged in. if not, the mustBeLoggedIn middleware would have caught it
    res.json([
      'Bears',
      'Beets',
      'Battlestar Galactica'
    ]);
  });

// Matches with "/apiRoutes/recruiters"
router.route("/recruiters")
  .get(recruitersController.findAll);
  console.log("this is working");

router.route('/recruiters/id')
  .get(recruitersController.findById);
  console.log("findByIdapiRoutes is working");

router.route("/projects")
  .get(projectsController.findAll);
  console.log("this is working");
  
router.route("/projects/id")
  .get(projectsController.findById);

router.route("/candidates")
  .get(candidatesController.findAll);
  
module.exports = router;