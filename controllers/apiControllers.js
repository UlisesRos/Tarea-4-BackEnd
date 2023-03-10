const {Farmacia} = require('../models/farmacia')
const { validationResult } = require('express-validator')

module.exports = {

    ver(req, res) {

        res.status(200).send('Hola, Bienvenidos a la base de datos de nuestra farmacia!!')

    },

    async lista(req, res){
        const items = await Farmacia.find()
        res.json({items})
    },
    async listaPorId(req, res){
        const item = await Farmacia.findById(req.params.id)
        res.json({item})
    },

    async crear(req, res){

        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const items = new Farmacia(req.body)
                await items.save()
                res.status(201).json(items)
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(401).json(error)
        }
    },

    async editar(req, res){
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                await Farmacia.findByIdAndUpdate(req.params.id, req.body);
                res.status(201).json({msg: `El producto se actualizo id ${req.params.id}`})
            } else {
                res.json(err)
            }
        } catch (error) {
            res.json(error)
        }
    },
    async eliminar(req, res){
        await Farmacia.findByIdAndDelete(req.params.id);
        res.json({msg: `El producto con el id: ${req.params.id} se elimino con exito!`})
    }
}