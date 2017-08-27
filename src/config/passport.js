var passport  = require('passport');


module.exports = function(app){

	app.use(passport.initialize());
	app.use(passport.session());


	passport.serializeUser(function(user,done){

		done(null,user.email);

	});

	passport.deserializeUser(function(email,done){

		done(null,email);

	});
};

