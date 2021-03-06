const Account = require("../models/account");
const passport = require('passport');

module.exports = {
	getUser: function (req, res) {

		const { user } = req.session.passport

		if (user) {
			Account.findOne({ username: user })
				.populate("posts")
				.then(userData => {
					console.log("POST", userData);
					const { _id, username, posts, following, followed } = userData;
					return res.status(200).json({
						id: _id,
						username,
						posts,
						following,
						followed,
						authenticated: true
					})
				})
		} else {
			return res.status(401).json({
				error: 'User is not authenticated',
				authenticated: false
			});
		}
	},

	getUserFromID: function (req, res) {
		Account.findOne({ _id: req.params.id })
			.then(userData => {
				console.log("POST", userData);
				const { _id, username, posts, following, followed } = userData;
				return res.status(200).json({
					id: _id,
					username,
					posts,
					following,
					followed,
					authenticated: true
				})
			})
	},

	register: function (req, res, next) {
		console.log('/register handler', req.body);
		Account.register(new Account({ username: req.body.username }), req.body.password, (err, account) => {
			if (err) {
				return res.status(500).send({ error: err.message });
			}

			passport.authenticate('local')(req, res, () => {
				req.session.save((err) => {
					if (err) {
						//ToDo:log the error and look for an existing user

						return next(err);
					}

					res.send(200, "successful register");
				});
			});
		});
	},
	login: function (req, res, next) {
		console.log('/login handler');
		if (!req.session.passport.user) {
			return false;
		}
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			console.log(`User at login ${req.user.username}`);

			res.status(200).json({ test: " testvalue" });
		});
	},
	logout: function (req, res, next) {
		req.logout();
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			res.status(200).send('OK');
		});
	},

	test: function (req, res, next) {
		console.log(`Ping Dinger ${req.statusCode}`);
		res.status(200).send("Dong!");
	},
	//Method that will update the following array for the current user by pushing the followed user's reference into the array
	addFollowing: async function (req, res) {
		const { user } = req.session.passport
		try {
			const data = await Account.findOneAndUpdate({ username: user },
				{ $push: { following: req.params.id } })
			res.json(data)
		} catch (err) {
			return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
		}
	},
	
	subtractFollowing: async function (req, res) {
		const { user } = req.session.passport
		try {
			console.log('This is the unfollowing')
			const data = await Account.findOneAndUpdate({username: user },
				{ $pull: { following: {$in: [req.params.id]}}})
				res.json(data)
		} catch (err) {
			return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
		}
	},

	// Method that gets all the users that a specific user is following
	getFollowingUsers: async function(req,res) {
		const { user } = req.session.passport
		try {
			const data = await Account.findById(id, (err) => {
				if (err) throw err;
				res.json(data)
			})
								
		} catch(err) {
			return res.status(400).json({error: errorHandler.getErrorMessage(err)})
		}
	},
// Method that will add the current user's reference to the followed user's followers array
 	addFollower: async function(req, res) {

		const { user } = req.session.passport
		const userName = { user }.user
		try {
			Account.findOne({ username: userName }, function (err, obj) { return obj._id }).then(
				userID =>
					Account.findOneAndUpdate({ _id: req.params.id },
						{ $push: { followed: userID } }, { new: true })
				
			)
		} catch (err) {
			return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
		}
	},

	removeFollower: async function(req, res){
		const { user } = req.session.passport
		const userName = { user }.user
		try {
			console.log('removing follower')
			Account.findOne({ username: userName }, function (err, obj) { return obj._id }).then(
				userID =>
					Account.findOneAndUpdate({ _id: req.params.id },
						{ $pull: { followed: {$in: [userID]} } }, { new: true })
			).catch(err=>res.status(422).json(err))
		} catch (err) {
			return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
		}
	}


};

