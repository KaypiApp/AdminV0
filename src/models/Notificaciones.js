const { Schema, model } = require('mongoose');

const notificacionSchema = new Schema({
    nombreLinea: String,
    descripcion: String,
    fechaInicio: String,
    fechaFin: String
}, { versionKey: false });

module.exports = model('notificaciones', notificacionSchema);
