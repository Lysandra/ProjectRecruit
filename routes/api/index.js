const router = require("express").Router();
const homeRoutes = require("./home");

// Home routes
router.use("/books", homeRoutes);

module.exports = router;
