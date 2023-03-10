const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiControllers');
const { check } = require('express-validator')
const validarId = require('../middleware/validarId')

router.get('/ver', apiController.ver);
router.get('/verLista', apiController.lista);
router.get('/verLista/:id', apiController.listaPorId);
router.post('/crear',[
    check('nombre').not().isEmpty().withMessage('El campo nombre es obligatorio').isLength({min: 3, max: 20}).withMessage('El campo de contener minimo 3 caracteres y maximo 20 caracteres'),
    check('droga').not().isEmpty().withMessage('El campo droga es obligatorio'),
    check('precio').not().isEmpty().withMessage('El campo precio es obligatorio'),
    check('stock').not().isEmpty().withMessage('El campo stock es obligatorio')
], apiController.crear);
router.put('/editar/:id', validarId, [
    check('nombre').not().isEmpty().withMessage('El campo nombre es obligatorio').isLength({min: 3, max: 20}).withMessage('El campo de contener minimo 3 caracteres y maximo 20 caracteres'),
    check('droga').not().isEmpty().withMessage('El campo droga es obligatorio'),
    check('precio').not().isEmpty().withMessage('El campo precio es obligatorio'),
    check('stock').not().isEmpty().withMessage('El campo stock es obligatorio')
], apiController.editar);
router.delete('/eliminar/:id', validarId, apiController.eliminar)


module.exports = router