const notificacionesService = require('../services/notificacionesService');

const consultaNotificaciones = async (req, res) => {
    try {
        const notificaciones = await notificacionesService.getNotificaciones();
        res.json({
            notificaciones: notificaciones
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las notificaciones' });
    }
}

module.exports = { consultaNotificaciones };
