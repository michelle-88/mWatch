const router = require("express").Router();

const userRoutes = require("./users.js");

// Book routes
// router.use("/books", bookRoutes);
// User Routes
router.use("/users", userRoutes);


module.exports = router;
