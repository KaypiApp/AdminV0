const notificacionesService = require('../services/notificacionesService');

const consultaNotificaciones = async (req, res) => {
    try {
        const notificaciones = await notificacionesService.getNotificaciones();
        res.json({
            response: "success",
            data: notificaciones
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las notificaciones' });
    }
}

const enviarNotificacion = async (req, res) => {
    const { nombreLinea, descripcion, fechaInicio, fechaFin } = req.body;
    try {
        const nuevaNotificacion = await notificacionesService.crearNotificacion({ nombreLinea, descripcion, fechaInicio, fechaFin });
        res.json({
            response: "success",
            data: nuevaNotificacion
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al enviar la notificación' });
    }
}

module.exports = { consultaNotificaciones, enviarNotificacion };
