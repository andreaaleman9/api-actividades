const prisma = require('../config/prisma');

class ActividadRepository {
  async obtenerTodas() {
    return await prisma.actividad.findMany({
      include: { seccion: true },
      orderBy: { fechaHora: 'asc' }
    });
  }

  async obtenerPorId(id) {
    return await prisma.actividad.findUnique({
      where: { id: Number(id) },
      include: { seccion: true }
    });
  }

  async crear(datos) {
    return await prisma.actividad.create({
      data: datos,
      include: { seccion: true }
    });
  }
}

module.exports = new ActividadRepository();