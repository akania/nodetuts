var connect = require('connect');

connect.createServer(
		connect.logger(),
		require('./log-it')(),
		require('./serve-js')()
).listen(4000);