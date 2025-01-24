module.exports = (sequelize, Sequelize) => {
	const Users = sequelize.define('Users', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false,
		},
        password: {
            type: Sequelize.TEXT,
            allowNull: false,
        }
	}, {
		timestamps: false,
	});


	return Users;
};
