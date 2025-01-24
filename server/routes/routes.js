async function routes(app) {
	const server = require('./server.routes');
	const quizz = require('./quizz.routes');
	const auth = require('./auth.routes');
	const register = require('./register.routes');


	app.use('/', server);
	app.use('/quizz', quizz);
	app.use('/auth', auth);
	app.use('/register', register);
}

module.exports = routes;