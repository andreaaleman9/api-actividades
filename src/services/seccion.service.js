const seccionRepository = require('../repositories/seccion.repository');
const AppError = require('../errors/appError');

class SeccionService {
  async listarSecciones() {
    return await seccionRepository.obtenerTodas();
  }

  async obtenerSeccionPorId(id) {
    const seccion = await seccionRepository.obtenerPorId(id);
    if (!seccion) {
      throw new AppError('La sección no fue encontrada', 404);
    }
    return seccion;
  }

  async crearSeccion(datos) {
    const { anio, especialidad, seccion } = datos;

    if (!anio || !especialidad || !seccion) {
      throw new AppError('Los campos anio, especialidad y seccion son obligatorios', 400);
    }

    return await seccionRepository.crear({ anio, especialidad, seccion });
  }
}

module.exports = new SeccionService();