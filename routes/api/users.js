const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/events"
router.route("/")

  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
