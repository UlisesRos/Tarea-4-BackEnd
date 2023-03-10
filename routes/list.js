const express = require('express');

const router = express.Router();

const listControllers = require('../controllers/listControllers');

router.get('/listaDeCompras', listControllers.listaDeCompras);

module.exports = router