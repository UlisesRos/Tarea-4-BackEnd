const express = require('express')
const ejercicioCinco = express()
const port = 3000

ejercicioCinco.get('/', (req, res) => {
    res.send("Hola! Estas son las tareas de las clases de BackEnd")
})

//Ejercicio 5
//Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}).

ejercicioCinco.get('/listaDeCompras', (req, res) => {
    
    res.json({
        producto1: req.query.producto1,
        producto2: req.query.producto2,
        producto3: req.query.producto3,
        producto4: req.query.producto4,
        producto5: req.query.producto5,
    })
})

ejercicioCinco.listen(port, () => {
    console.log(`Ejemplo que lee app desde el puerto ${port}`)
})