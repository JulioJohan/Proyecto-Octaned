
const mongoose = require ('mongoose');

const ProyectoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cliente: {
        type: String,
        require: true
    },
    estatus: {
        type: String,
        require: true
    },
    interna: {
        type: String,
        require: true
    },
    usuario1: {
        type: String,
        require: true
    },
    usuario2: {
        type: String,
        require: true
    },
    fecha: {
        type: String,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
  
});

module.exports = mongoose.model('Proyecto',ProyectoSchema);