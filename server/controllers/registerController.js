const Users = require('../models/Users');
const db = require('../models/Models');


const register = async (req, res) => {
    try {
        const { username, password } = req.body;
		const user = await db.sequelize.query(
            `
            INSERT INTO Users(username, password) VALUES (:username, :password)
            `,
            {
                replacements : { username, password },
                type: db.Sequelize.QueryTypes.SELECT,
            }
        );
		return res.status(200).json({ message: user });
	}
	catch (error) {
		console.error('Erreur lors de la récupération du profil :', error);
		res.status(500).json({ message: 'Erreur interne', error });
	}
}

module.exports = { register };