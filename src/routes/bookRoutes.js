var express = require('express');
var connect = require('../../app.js');
var mongodb  = require('mongodb').MongoClient;
var objectId  = require('mongodb').ObjectId;
var bookRouter  = express.Router();



var router=function(nav){
	var bookService = require('../services/goodReadService')();

	var bookController = require('../config/controllers/book-controller')(bookService,nav)
	bookRouter.use(bookController.middleware);

	bookRouter.route('/')
	.get(bookController.getIndex);

	bookRouter.route('/:id')
	.get(bookController.getById);

	return bookRouter;
}
module.exports = router;