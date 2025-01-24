require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const db = require('./models/Models');
const cors = require('cors');

const PORT = 8000;
app.use(bodyParser.json());
app.use(cors());

routes(app);

app.listen(PORT, () => {
	console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});