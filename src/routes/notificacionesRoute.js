const { Router } = require('express');
const { consultaNotificaciones } = require('../controllers/notificacionesControllerMovil');

const router = Router();

// Ruta para consultar notificaciones
router.get('/api/notificaciones', consultaNotificaciones);

// Ruta para editar una notificación
router.get('/api/notificaciones/:id', (req, res) => {
  // Aquí maneja la lógica para editar la notificación con el ID proporcionado
});

// Ruta para eliminar una notificación
router.delete('/api/notificaciones/:id', (req, res) => {
  // Aquí maneja la lógica para eliminar la notificación con el ID proporcionado
});

module.exports = router;
