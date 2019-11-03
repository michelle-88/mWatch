const router = require("express").Router();
const passport = require("passport");
const userController = require("../../controllers/mWatch");

router.route("/")
    .get(userController.getUser);
router.route("/signup")
    .post(userController.register);
router.route("/logn")
    .post(passport.authenticate("local", {failureRedirect: "/login"}), userController.login);
router.route("/logout")
    .get(userController.logout);
router.route("/watchlist")
    .post(userController.addToList);

module.exports = router;