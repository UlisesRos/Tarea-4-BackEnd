const express = require('express');
//Router de express
const router = express.Router();
const indexControllers = require('../controllers/indexControllers')

router.get('/', indexControllers.holaMundo)

module.exports = router