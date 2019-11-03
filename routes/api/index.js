const router = require("express").Router();
// const bookRoutes = require("./books");
const userRoutes = require("./users.js");

// Book routes
// router.use("/books", bookRoutes);
// User Routes
router.use("/users", userRoutes);


module.exports = router;
