var express = require('express');

var app = express.createServer();

app.configure(function(){
	
	app.use(express.logger());
	
	app.use(express.errorHandler({
		dumpExceptions : true,
		showStack : true
	}));
	
});

app.set('views',__dirname + '/views' );
app.set('view engine', 'jade' );
//app.set('view options', {layout:true})

app.get('/',function( req, res ){
	res.render('root');
});

app.listen(4000);