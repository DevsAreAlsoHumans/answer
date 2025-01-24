const config = require('../config/database.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
	config.DB,
	config.USER,
	config.PASSWORD,
	{
		host: config.HOST,
		dialect: config.dialect,
		pool: {
			max: config.pool.max,
			min: config.pool.min,
			acquire: config.pool.acquire,
			idle: config.pool.idle,
		},
		define: {
			timestamps: false,
		},
		logging: true,
	},
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Quizz = require('./Quizz.js')(sequelize, Sequelize);
db.Question = require('./Question.js')(sequelize, Sequelize);
db.Answer = require('./Answer.js')(sequelize, Sequelize);
db.Users = require('./Users.js')(sequelize, Sequelize);

// Configuration des relations
Object.values(db).forEach((model) => {
	if (model.associate) {
		model.associate(db);
	}
});


(async () => {
	await sequelize.sync({ force: true });
	console.log('Les modèles sont synchronisés avec la base de données.');

	const quizzData = {
		name: 'Quizz 1',
		Questions: [
			{
				question: 'Quelle est la couleur du cheval Blanc d\'Henri IV ?',
				Answers: [
					{ answer: 'Blanc', isAnswer: true },
					{ answer: 'Pas Blanc', isAnswer: false },
					{ answer: 'blanc', isAnswer: false },
					{ answer: 'nwar is the new black', isAnswer: false },
				],
			},
			{
				question: 'Quel est le meilleur projet ?',
				Answers: [
					{ answer: 'Un projet raté', isAnswer: false },
					{ answer: 'Answer', isAnswer: true },
				],
			},
			{
				question: 'Qui est le meilleur dev ? (Sacha ne joue pas)',
				Answers: [
					{ answer: 'Jeremy', isAnswer: false },
					{ answer: 'Sacha', isAnswer: true },
					{ answer: 'Charles', isAnswer: false },
					{ answer: 'Atman', isAnswer: false },
					{ answer: 'Thibault', isAnswer: false },
				],
			},
			{
				question: 'Comment est votre blanquette ?',
				Answers: [
					{ answer: 'Euuuh...', isAnswer: false },
					{ answer: 'Elle est bonne.', isAnswer: true },
				],
			},
			{
				question: 'Quel est le meilleur outil pour gérer une équipe Scrum ?',
				Answers: [
					{ answer: 'Notion', isAnswer: false },
					{ answer: 'Jira', isAnswer: true },
				],
			},
		],
	};

	await db.Quizz.create(quizzData, {
		include: [{
			model: db.Question,
			include: [db.Answer],
		}],
	});

	console.log('Données insérées avec succès !');
})();


module.exports = db;