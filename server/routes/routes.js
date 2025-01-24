async function routes(app) {
	const server = require('./server.routes');
  
	
	app.use('/', server);
  }
  
  module.exports = routes;