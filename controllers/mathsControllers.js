module.exports = {

    division(req, res){
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
    },

    suma(req, res){
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
    },

    parImpar(req, res){
        if (req.query.numero % 2 == 1) {
            res.send("No autorizado")
        } 
        else {
            res.send("Autorizado")
        }
    }


}