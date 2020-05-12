const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./posts");

//User Routes
router.use("/users", userRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
// Post Routes
router.use("/posts", postRoutes);

module.exports = router;
