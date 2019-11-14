const Account = require("../models/account");
const PeanutGallery = require("../models/peanutGallery");
const Comment = require("../models/comment");
const passport = require('passport');

module.exports = {
    getUser: function(req, res, next) {
		console.log("User in getUser")
		console.log(req.session.passport.user)
        if(req.session.passport.user) {
            return res.status(200).json({
                user: req.session.passport.user,
                authenticated: true
            });
        } else {
            return res.status(401).json({
                error: 'User is not authenticated',
                authenticated: false
            });
        }
	},
	
    register: function(req, res, next) {
        console.log('/register handler', req.body);
		Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
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
		});
    },
    login: function(req, res, next) {
		// console.log('/login handler');
		// console.log("req.body")
		// console.log(req.body)
		// console.log("User in getUser")
		// console.log(req.session.passport.user)
		// console.log(req.session)
		// console.log("status")
		// console.log(res.status)
		if(!req.session.passport.user){
			return false
		}
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			console.log("res.status")
			console.log(res.status())
			res.status(200).send('OK');
		});
    },
    logout: function(req, res, next) {
		req.logout();
		console.log("loged out")
		req.session.save((err) => {
			console.log(req.session)
			if (err) {
				return next(err);
			}
			res.status(200).send('OK')
		});
    },
    
    test: function(req , res, next){
        console.log(`Ping Dinger ${req.statusCode}`);
		res.status(200).send("Dong!");
	},
	// checkShow: function(req, res){
	// 	console.log(req.body)
	// 	Account
	// 	  .findOne({username: req.params.username})
	// 	  .then(console.log("Testing Here"))
	// 	  console.log("req.body")
	// 	  console.log(req.body)
	// 	  console.log("req.body.id")
	// 	  console.log(req.body.id)
	// 	  console.log("dbModel")
	// 	  console.log(dbModel)
	// 	  .then(dbModel => console.log(dbModel))
	// 	  .then(dbModel.watchList.forEach(show=>{
	// 		  console.log("logging show")
	// 		  console.log(show)
	// 	  }))
	// 	  .catch(err => res.status(422).json(err))
	// },
	addToList: function(req, res) {
		console.log(req.body)
		Account
		  .findOneAndUpdate({username: req.params.username}, {$push: {watchList: req.body}})
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	},
	
	getList: function(req, res) {
		Account
		  .findOne({username: req.params.username})
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	},
	
	removeFromList: function(req, res) {
		Account
		  .findOneAndUpdate({username: req.params.username}, {$pull: {watchList: {_id: req.params.id}}})
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	},

	addToPeanutGallery: function(req, res) {
		PeanutGallery
		  .create(req.body)
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	},

	updatePeanutGallery: function(req, res) {
		PeanutGallery
		  .findOneAndUpdate({imdbId: req.params.id}, {$push: {whereToWatch: req.body}})
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	},

	getFromPeanutGallery: function(req, res) {
		PeanutGallery
		  .findOne({tmdbId: req.params.id})
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	},

	postComment: function(req, res) {
		Comment
		  .create(req.body)
		  .then(function(dbComment) {
			return PeanutGallery.findOneAndUpdate({tmdbId: req.params.id}, {$push: {comments: dbComment._id}}, {new: true});
		  })
		  .then(function(dbModel) {
			console.log(dbModel);
			res.end();
		  })
		  .catch(function(err) {
			console.log(err);
		  });
	}
};