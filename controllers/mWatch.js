const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // user authenication
  getUser: (req, res, next)=>{
    if(req.user){
      return res.status(200).json({
        user: req.user,
        authenticated: true
      });
    } else {
        return res.status(401).json({
          error: "user not authenticated",
          authenticated: false
        });
    }
  },
  register: function(req, res, next) {
    console.log('/register handler', req.body);
    db.User.register(new User({ username : req.body.username }), req.body.password, (err, account) => {
      if (err) {
        return res.status(500).send({ error : err.message });
      }
      passport.authenticate('local')(req, res, () => {
        req.session.save((err) => {
          if (err) {
            //ToDo:log the error and look for an existing user
              return next(err);
          }
          res.send(200,"successful register");
        });
      });
    });
  },
  login: function(req, res, next) {
    console.log('/login handler');
    req.session.save((err) => {
      if (err) {
        return next(err);
      }
      res.status(200).send('OK');
    });
  },
  logout: function(req, res, next) {
    req.logout();
    req.session.save((err) => {
      if (err) {
        return next(err);
      }
      res.status(200).send('OK');
    });
  },

  addToList: function(req, res) {
    db.User
      .findOneAndUpdate({userName: "michelle"}, {$push: {watchList: req.body}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
