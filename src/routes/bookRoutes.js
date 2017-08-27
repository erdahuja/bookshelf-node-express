var express = require('express');
var connect = require('../../app.js');
var mongodb  = require('mongodb').MongoClient;
var objectId  = require('mongodb').ObjectId;
var bookRouter  = express.Router();




var router=function(nav){

	bookRouter.use(function(req,res,next){

		if(!req.user){

			res.redirect('/');
		}
		next();

	});

	bookRouter.route('/')
	.get(function(req,res){

		mongodb.connect('mongodb://localhost:27017/books',function(err,db){

			var coll = db.collection('books');
			coll.find({}).toArray(function(err,books){



				res.render('bookListView',{
					title:'Hello from books render',
					nav:nav,
					books:books
				});
			})
		})



	});

	bookRouter.route('/:id')
	.get(function(req,res){

		var id=new objectId(req.params.id);

		mongodb.connect('mongodb://localhost:27017/books',function(err,db){

			var coll = db.collection('books');
			coll.find({_id:id}).toArray(function(err,books){

				
				res.render('bookView',{
					title:'Books',
					nav:nav,
					book:books[0]
				});

			})
		})
		




	});

	return bookRouter;
}
module.exports = router;