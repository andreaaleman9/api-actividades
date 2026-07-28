const express = require('express');
const router = express.Router();
const actividadController = require('../controllers/actividad.controller');

router.get('/', actividadController.obtenerActividades);
router.get('/:id', actividadController.obtenerActividadPorId);
router.post('/', actividadController.crearActividad);

module.exports = router;