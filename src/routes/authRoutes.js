var express = require('express');

var mongodb  = require('mongodb').MongoClient;
var objectId  = require('mongodb').ObjectId;


var authRouter  = express.Router();


var router = function(nav){

	authRouter.route('/signUp')
	.post(function(req,res){


		mongodb.connect('mongodb://localhost:27017/books',function(err,db){


			var coll = db.collection('users');
			coll.insert(req.body,function(err,user){
				console.log("user created",user);
				req.login(req.body,function(){

					res.redirect('/auth/profile');
				})

			});
		})


	});


	authRouter.route('/profile')
	.get(function(req,res){

		res.json(req.user);
		



	})

	authRouter.route('/signIn')
	.get(function(req,res){


		



	})


	return authRouter;

}

module.exports = router;