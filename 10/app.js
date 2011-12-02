var express = require('express');

var app = express.createServer();


app.configure(function(){
	app.use(express.logger());
	app.use(express.static(__dirname + '/static' ));
});


app.configure('development', function(){
	
	app.use(express.errorHandler({
		dumpExceptions : true,
		showStack : true
	}));
	
});

app.set('views',__dirname + '/views' );
app.set('view engine', 'jade' );

app.get('/',function( req, res ){
	res.render('root');
});

var products = require('./products'); console.log(products.all);

app.get('/products', function( req, res ){
	res.render('products/index',{ locals : { products : products.all } });
});

app.get('/products/:id', function( req, res ){
	var products = products.find(req.params.id);
	res.render('products/show',{ locals : { product : products } });
});

app.listen(4000);