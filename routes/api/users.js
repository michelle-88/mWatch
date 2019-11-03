const router = require("express").Router();
const passport = require("passport");
const userController = require("../../controllers/mWatch");

router.route("/")
    .get(userController.getUser);
router.route("/signup")
    .post(userController.register);
router.route("/login")
    .post(passport.authenticate("local", {failureRedirect: "/login"}), userController.login);
router.route("/logout")
    .get(userController.logout);

module.exports = router