var express=require('express');

var app= express();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/',function(req,res){

	res.send('hello');

});


app.get('/books',function(req,res){

	res.send('hello books');

});


app.listen(9000,function(err){


	console.log("running server on ",9000);
});
