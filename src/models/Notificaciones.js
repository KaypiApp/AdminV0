const { Schema, model } = require('mongoose');

const notificacionSchema = new Schema({
    nombreLinea: String,
    descripcion: String,
    fechaInicio: String,
    fechaFin: String,
    isSent: {
        type: Boolean,
        default: false 
    }
}, { versionKey: false });

module.exports = model('notificaciones', notificacionSchema);
