const express = require('express')
const ejercicioCuatro = express()
const port = 3000

ejercicioCuatro.get('/', (req, res) => {
    res.send("Hola! Estas son las tareas de las clases de BackEnd")
})

//Ejercicio 4
//Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , 
//y si el número es par debe devolver res.send("autorizado").

ejercicioCuatro.get('/numero', (req, res) => {
    if (req.query.numero % 2 == 1) {
        res.send("No autorizado")
    } 
    else {
        res.send("Autorizado")
    }
})

ejercicioCuatro.listen(port, () => {
    console.log(`Ejemplo que lee app desde el puerto ${port}`)
})