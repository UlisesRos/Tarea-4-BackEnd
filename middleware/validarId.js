const { Farmacia } = require('../models/farmacia')

module.exports = validarId = async (req, res, next) => {

    try {
        const items = await Farmacia.findById(req.params.id)
        if (items != null) {
            next()
        } else {
            res.status(501).json({msg: "El id es invalido"})
        }
    } catch (error) {
        res.status(501).json(error)
    }

}