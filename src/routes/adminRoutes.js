var express = require('express');
var connect = require('../../app.js');
var mongodb  = require('mongodb').MongoClient;
var objectId  = require('mongodb').ObjectId;
var prettyjson = require('prettyjson');

var adminRouter  = express.Router();


var router = function(nav){

	adminRouter.route('/')
	.get(function(req,res){




	})

	adminRouter.route('/books')
	.get(function(req,res){


		



	})


	return adminRouter;

}

module.exports = router;