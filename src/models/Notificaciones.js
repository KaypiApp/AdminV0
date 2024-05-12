const { Schema, model } = require('mongoose');

const notificacionSchema = new Schema({
    nombreLinea: String,
    descripcion: String,
    fechaInicio: Date,
    fechaFin: Date
}, { versionKey: false });

module.exports = model('notificaciones', notificacionSchema);
