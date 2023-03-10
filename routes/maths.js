const express = require('express');

const router = express.Router();

const mathsCotrollers = require('../controllers/mathsControllers');

router.get('/division/:divisor/:dividendo', mathsCotrollers.division);
router.get('/suma/:num1/:num2', mathsCotrollers.suma);
router.get('/parImpar/numero', mathsCotrollers.parImpar);

module.exports = router