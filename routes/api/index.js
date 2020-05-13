const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./posts");

//User Routes
router.use("/users", userRoutes);
// Post Route
router.use("/posts", postRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});



module.exports = router;
