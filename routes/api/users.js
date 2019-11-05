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
  .post(passport.authenticate('local', { failureRedirect: '/login'}), usersController.login);

router.route("/logout")
  .post(usersController.logout);

router.route("/watchlist/:username")
  .post(usersController.addToList);
router.route("/watchlist/:username")
  .get(usersController.getList);
router.route("/watchlist/:username/:id")
  .delete(usersController.removeFromList);
router.route("/peanutgallery")
  .post(usersController.addToPeanutGallery)
// Matches with "/api/users/:id"

/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

module.exports = router;