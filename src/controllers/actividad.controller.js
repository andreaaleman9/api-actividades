const actividadService = require('../services/actividad.service');

exports.obtenerActividades = async (req, res, next) => {
  try {
    const actividades = await actividadService.listarActividades();
    res.status(200).json({ ok: true, data: actividades });
  } catch (error) {
    next(error);
  }
};

exports.obtenerActividadPorId = async (req, res, next) => {
  try {
    const actividad = await actividadService.obtenerActividadPorId(req.params.id);
    res.status(200).json({ ok: true, data: actividad });
  } catch (error) {
    next(error);
  }
};

exports.crearActividad = async (req, res, next) => {
  try {
    const nuevaActividad = await actividadService.crearActividad(req.body);
    res.status(201).json({ ok: true, data: nuevaActividad });
  } catch (error) {
    next(error);
  }
};