const express = require('express');

const { login } = require('../controllers/serverController')
const router = express.Router();

router.post('/', login);

module.exports = router;