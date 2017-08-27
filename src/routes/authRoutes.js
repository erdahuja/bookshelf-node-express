var express = require('express');

var mongodb  = require('mongodb').MongoClient;
var objectId  = require('mongodb').ObjectId;


var authRouter  = express.Router();


var router = function(nav){

	authRouter.route('/signUp')
	.post(function(req,res){


		mongodb.connect('mongodb://localhost:27017/books',function(err,db){

			console.log(req.body);
			// var coll = db.collection('auth');
			// coll.insert({}).toArray(function(err,user){
			// 	console.log("user created");


			// });
		})


	})

	authRouter.route('/signIn')
	.get(function(req,res){


		



	})


	return authRouter;

}

module.exports = router;