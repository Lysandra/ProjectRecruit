const router = require("express").Router();
const homeController = require("../../controllers/homeController");
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/home"
router.route("/")
  .get(homeController.findAll)
  .post(homeController.create);

router.route("/projects")
.get(projectsController.findAll)
.post(projectsController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
