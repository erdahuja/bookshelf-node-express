var mongodb  = require('mongodb').MongoClient;
var objectId  = require('mongodb').ObjectId;


var bookController  = function(bookService,nav){

	var middleware = function(req,res,next){

		if(!req.user){

		//	res.redirect('/');
	}
	next();

};

var getIndex  = function(req,res){

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



}
var getById = function(req,res){

	var id=new objectId(req.params.id);

	mongodb.connect('mongodb://localhost:27017/books',function(err,db){

		var coll = db.collection('books');
		coll.find({_id:id}).toArray(function(err,books){

			if(books[0].bookId){

				bookService.getBookById(books[0].bookId,function(err,book){


					res.render('bookView',{
						title:'Books',
						nav:nav,
						book:book
					});

				});

			}else{

				res.render('bookView',{
					title:'Books',
					nav:nav,
					book:books[0]
				});
			}



		})
	})





}

return {
	getIndex :getIndex,
	getById:getById,
	middleware:middleware
};


};

module.exports = bookController;