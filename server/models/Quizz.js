module.exports = (sequelize, Sequelize) => {
	const Quizz = sequelize.define('a_quizz', {
		quizz_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		quizz_name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		quizz_topic: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	}, {
		timestamps:false,
	});

	return Quizz;
};