const express = require('express')

const router = express.Router();

const usersControllers = require('../controllers/usersControllers');

router.get('/saludo/:nombre/:apellido', usersControllers.saludo);
router.post('/crear', usersControllers.crear)

module.exports = router