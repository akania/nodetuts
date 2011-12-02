var products = [{
	id : 1,
	name : 'mcbook',
	description : '13inch',
	price : 1000
},{
	id : 2,
	name : 'ipad',
	description : '64gb',
	price : 899
}];

module.exports.all = products;

module.exports.find = function( id ){
	var id = parseInt( id,10);
	for( i in products ){
		if( products[i] == id ){
			return product;
		}
	}
}