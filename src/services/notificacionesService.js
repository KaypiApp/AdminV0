const Notificacion = require('../models/Notificaciones');

class NotificacionesService {
    constructor() {}

    async getNotificaciones() {
        try {
            return await Notificacion.find();
        } catch (error) {
            throw new Error(error);
        }
    }

    async crearNotificacion(datosNotificacion) {
        try {
            const nuevaNotificacion = new Notificacion(datosNotificacion);
            return await nuevaNotificacion.save();
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new NotificacionesService();
