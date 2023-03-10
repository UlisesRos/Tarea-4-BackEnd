module.exports = {

    saludo(req,res){
        res.send(`Hola ${req.params.nombre} ${req.params.apellido}!!!`)
    },

    crear(req, res){
        res.status(201).json({
            nombre: req.body.nombre,
            status: req.body.status
        })
    }
}