const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const farmacia = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    droga: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type:Boolean,
        required: true
    },
    numeroDeId: {
        type: Number
    }
})

//En esta linea se va a generar el modelo
const Farmacia = mongoose.model('Farmacia', farmacia);
module.exports = {Farmacia}