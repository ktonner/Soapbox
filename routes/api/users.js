const router = require("express").Router();
const passport = require('passport');
const usersController = require("../../controllers/usersController");
// Matches with "/api/users"
router.route("/")
  .get(usersController.getUser);

/* Authentication Routes */
router.route("/register")
  .post(usersController.register);

router.route("/login")

  //Added this to redirect to the login 
  .post(passport.authenticate('local', { failureRedirect: '/login' }), usersController.login);
//Changed to post route to match the request

router.route("/logout")
  .post(usersController.logout);


// Matches with "/api/users/:id"
router.route("/user")
  .get(usersController.getUser);

  router.route("/:id")
  .get(usersController.getUserFromID)

/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

//Set up follow route
router.route("/follow/:id")
  .put(usersController.addFollowing)

router.route("/follower/:id")
  .put(usersController.addFollower)

//Get users that a specific user is following
router.route("/users")
      .get(usersController.getFollowingUsers)

  module.exports = router;
