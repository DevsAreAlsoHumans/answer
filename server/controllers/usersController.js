const Users = require('../models/Users');
const db = require('../models/Models');


const login = async (req, res) => {
    try {
        const { username, password } = req.body;
		const user = await db.sequelize.query(
            `
            SELECT username FROM Users
            WHERE username = :username AND password = :password
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

const checkUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await db.sequelize.query(
            `
            SELECT username FROM Users
            WHERE username = :username
            `,
            {
                replacements : { username },
                type: db.Sequelize.QueryTypes.SELECT,
            }
        );
		return res.status(user ? 403 : 204).json({ });
    }
    catch (error) {
        console.error('Erreur lors de la validation du nom d\'utilisateur :', error);
		res.status(500).json({ message: 'Erreur interne', error });
    }
}

module.exports = { login, checkUsername };