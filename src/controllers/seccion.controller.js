const seccionService = require('../services/seccion.service');

exports.obtenerSecciones = async (req, res, next) => {
  try {
    const secciones = await seccionService.listarSecciones();
    res.status(200).json({ ok: true, data: secciones });
  } catch (error) {
    next(error);
  }
};

exports.obtenerSeccionPorId = async (req, res, next) => {
  try {
    const seccion = await seccionService.obtenerSeccionPorId(req.params.id);
    res.status(200).json({ ok: true, data: seccion });
  } catch (error) {
    next(error);
  }
};

exports.crearSeccion = async (req, res, next) => {
  try {
    const nuevaSeccion = await seccionService.crearSeccion(req.body);
    res.status(201).json({ ok: true, data: nuevaSeccion });
  } catch (error) {
    next(error);
  }
};