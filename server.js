const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(passport.session()); app.use(express.static(path.join(__dirname, '../build')));
}

app.use(routes);

/* === Server-Side Authentication w/passport.js on our Model === */
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mWatchDB");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
