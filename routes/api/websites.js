const router = require("express").Router();
const websitesController = require("../../controllers/websitesController");

// Matches with "/api/websites"
router.route("/")

  .get(websitesController.findAll)
  .post(websitesController.create);

// router.route("/login")
//   .post(usersController.findByEmail)
  
  
// Matches with "/api/websites/:id"
router
  .route("/:id")
  .get(websitesController.findById)
  .put(websitesController.update)
  .delete(websitesController.remove);



module.exports = router;