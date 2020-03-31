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



module.exports = router;
