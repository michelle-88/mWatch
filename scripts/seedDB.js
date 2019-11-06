const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/"
);

const userSeed = [
  {
    username: "user",
    password: "password",
    watchlist: []
  }
];

db.Account
  .remove({})
  .then(() => db.Account.register(new Account({ username : userSeed.username }), userSeed.password, (err, account) => {
    if (err) {
      return res.status(500).send({ error : err.message });
    }
    passport.authenticate('local')(req, res, () => {
      req.session.save((err) => {
        if (err) {
          return next(err);
        }
        res.status(200).send('OK');
      });
    });
  }))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  // Account.register(new Account({ username : userSeed.username }), userSeed.password, (err, account) => {
  //   if (err) {
  //     return res.status(500).send({ error : err.message });
  //   }
  //   passport.authenticate('local')(req, res, () => {
  //     req.session.save((err) => {
  //       if (err) {
  //         return next(err);
  //       }
  //       res.status(200).send('OK');
  //     });
  //   });
  // })
