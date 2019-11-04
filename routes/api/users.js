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
  .post(passport.authenticate('local', { failureRedirect: '/?error=LoginError'}), usersController.login);

router.route("/logout")
  .get(usersController.logout);

router.route("/watchlist")
  .post(usersController.addToList);
router.route("/:username")
  .get(usersController.getList);
router.route("/watchlist/:id")
  .delete(usersController.removeFromList);


// Matches with "/api/users/:id"

/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

module.exports = router;