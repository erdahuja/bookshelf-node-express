var express=require('express');
var ejs  = require('ejs');
var sql = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var app= express();

const config = {
	user: 'root',
	password: '',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    database: 'books',
    port:3306
}


var connect = sql.createConnection(config);

connect.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}


});

module.exports  = connect;


var nav=[
{
	Link:'/books',
	Text:'Books'
},

{
	Link:'/authors',
	Text:'Authors'
}

];
var bookRouter  = require('./src/routes/bookRoutes')(nav);
var adminRouter  = require('./src/routes/adminRoutes')(nav);
var authRouter  = require('./src/routes/authRoutes')(nav);

app.use(express.static('public'));
app.set('views','./src/views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({

	secret:'library'

}));

require('./src/config/passport')(app);




app.set('view engine','.ejs');

app.get('/',function(req,res){

	res.render('index',{
		title:'Hello from render',
		nav:nav
	});

});
app.use('/books',bookRouter);

app.use('/admin',adminRouter);
app.use('/auth',authRouter);


app.get('/authors',function(req,res){

	res.send('hello authors');

});
var port = process.env.PORT||9000;

app.listen(port,function(err){


	console.log('running server on ',port);
});