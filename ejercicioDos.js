const express = require('express')
const ejercicioDos = express()
const port = 3000

ejercicioDos.get('/', (req, res) => {
    res.send("Hola! Estas son las tareas de las clases de BackEnd")
})

//Ejercicio 2
//Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver 
//un res.json({error: "no se puede dividir por cero"})
//si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}).

ejercicioDos.get('/user/:divisor/:dividendo', (req, res) => {
    let resultado = req.params.divisor / req.params.dividendo

    if(req.params.divisor == 0 || req.params.dividendo == 0){
        res.json({
            error: "No se puede dividir por cero"
        })
    } 
    else{
        res.json({
            resutado: resultado
        })
    }
})

ejercicioDos.listen(port, () => {
    console.log(`Ejemplo que lee app desde el puerto ${port}`)
})