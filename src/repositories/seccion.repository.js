const prisma = require('../config/prisma');

class SeccionRepository {
  async obtenerTodas() {
    return await prisma.seccion.findMany({
      include: { actividades: true }
    });
  }

  async obtenerPorId(id) {
    return await prisma.seccion.findUnique({
      where: { id: Number(id) },
      include: { actividades: true }
    });
  }

  async crear(datos) {
    return await prisma.seccion.create({
      data: datos
    });
  }
}

module.exports = new SeccionRepository();