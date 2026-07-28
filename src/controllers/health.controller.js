const prisma = require('../config/prisma');

exports.checkHealth = async (req, res, next) => {
  try {
    // Verificación activa consultando la base de datos
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      status: 'UP',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      services: {
        database: 'CONNECTED',
        api: 'OPERATIONAL'
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'DOWN',
      timestamp: new Date().toISOString(),
      services: {
        database: 'DISCONNECTED',
        error: error.message
      }
    });
  }
};