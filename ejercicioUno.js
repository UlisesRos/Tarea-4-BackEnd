const express = require('express')
const ejercicioUno = express()
const port = 3000

ejercicioUno.get('/', (req, res) => {
    res.send("Hola! Estas son las tareas de las clases de BackEnd")
})

//Ejercicio 1.
//Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) 
//y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).

ejercicioUno.get('/user/:nombre/:apellido', (req, res) => {

    res.send(`Hola ${req.params.nombre} ${req.params.apellido}!!!`)

})

ejercicioUno.listen(port, () => {
    console.log(`Ejemplo que lee app desde el puerto ${port}`)
})