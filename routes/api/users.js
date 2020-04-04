const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")

  .get(usersController.findAll)
  .post(usersController.create);

router.route("/login")
  .post(usersController.findByEmail)
  
  
// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.updateUserWebsite)
  .delete(usersController.remove);

router
.route("/todo/:id")
.put(usersController.addUserTodo)
.post(usersController.deleteUserTodo)

router
.route("/event/:id")
.put(usersController.addUserEvent)
.post(usersController.deleteUserEvent)

router
.route("/website/:id")
.post(usersController.deleteUserWebsite)

module.exports = router;
