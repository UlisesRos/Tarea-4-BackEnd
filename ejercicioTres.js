const express = require('express')
const ejercicioTres = express()
const port = 3000

ejercicioTres.get('/', (req, res) => {
    res.send("Hola! Estas son las tareas de las clases de BackEnd")
})

//Ejercicio 3
//Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición 
//de que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}).

ejercicioTres.get('/user/:num1/:num2', (req, res) => {
    let resultado = Number(req.params.num1) + Number(req.params.num2)
    if(req.params.num1 < 0 || req.params.num2 < 0 ){
        res.json({
            error: "No se pueden ingresar numeros menores a 0"
        })
    }
    else{
        res.json({
            resultado: resultado
        })
    }
})

ejercicioTres.listen(port, () => {
    console.log(`Ejemplo que lee app desde el puerto ${port}`)
})