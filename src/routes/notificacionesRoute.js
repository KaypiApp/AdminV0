const { Router } = require('express');
const { consultaNotificaciones } = require('../controllers/notificacionesControllerMovil');

const router = Router();

router.get('/api/notificaciones', consultaNotificaciones);

module.exports = router;
