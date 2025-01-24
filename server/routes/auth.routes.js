const express = require('express');

const { login, checkUsername } = require('../controllers/usersController')
const router = express.Router();

router.get('/check-username/:username', checkUsername);
router.post('/login', login);

module.exports = router;