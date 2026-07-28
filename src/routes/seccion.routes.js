const express = require('express');
const router = express.Router();
const seccionController = require('../controllers/seccion.controller');

router.get('/', seccionController.obtenerSecciones);
router.get('/:id', seccionController.obtenerSeccionPorId);
router.post('/', seccionController.crearSeccion);

module.exports = router;