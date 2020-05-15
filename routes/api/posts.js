const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router.route("/")
  .get(postsController.findAll)


// Matches with "/api/posts/:id"
router
  .route("/:id")
  .post(postsController.create)
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;