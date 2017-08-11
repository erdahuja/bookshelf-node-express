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
var port = process.env.PORT||9000;

app.listen(port,function(err){


	console.log('running server on ',port);
});