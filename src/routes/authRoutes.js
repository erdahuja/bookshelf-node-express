var express = require('express');

var mongodb  = require('mongodb').MongoClient;
var objectId  = require('mongodb').ObjectId;


var authRouter  = express.Router();


var router = function(nav){

	authRouter.route('/signUp')
	.post(function(req,res){




	})

	authRouter.route('/signIn')
	.get(function(req,res){


		



	})


	return authRouter;

}

module.exports = router;