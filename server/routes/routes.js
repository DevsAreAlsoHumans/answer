async function routes(app) {
	/* ROUTES  */
	const server = require('./server.routes');
	app.use('/', server);
}


module.exports = routes;