const actividadRepository = require('../repositories/actividad.repository');
const seccionRepository = require('../repositories/seccion.repository');
const AppError = require('../errors/appError');

class ActividadService {
  async listarActividades() {
    return await actividadRepository.obtenerTodas();
  }

  async obtenerActividadPorId(id) {
    const actividad = await actividadRepository.obtenerPorId(id);
    if (!actividad) {
      throw new AppError('La actividad no existe', 404);
    }
    return actividad;
  }

  async crearActividad(datos) {
    const { titulo, descripcion, tipo, lugar, fechaHora, organizador, seccionId } = datos;

    if (!titulo || !tipo || !seccionId || !fechaHora) {
      throw new AppError('Campos obligatorios: titulo, tipo, fechaHora, seccionId', 400);
    }

    // Verificar que la sección asignada realmente exista
    const existeSeccion = await seccionRepository.obtenerPorId(seccionId);
    if (!existeSeccion) {
      throw new AppError('La sección indicada no existe en el sistema', 404);
    }

    return await actividadRepository.crear({
      titulo,
      descripcion: descripcion || '',
      tipo,
      lugar: lugar || 'Por confirmar',
      fechaHora: new Date(fechaHora),
      organizador: organizador || 'Instituto',
      seccionId: Number(seccionId)
    });
  }
}

module.exports = new ActividadService();