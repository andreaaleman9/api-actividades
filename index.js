require('dotenv').config();
const express = require('express');
const healthRoutes = require('./src/routes/health.routes');
const seccionRoutes = require('./src/routes/seccion.routes');
const actividadRoutes = require('./src/routes/actividad.routes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Registro de Endpoints
app.use('/', healthRoutes);
app.use('/api/secciones', seccionRoutes);
app.use('/api/actividades', actividadRoutes);

// Manejo de 404 (Rutas inexistentes)
app.use((req, res, next) => {
  res.status(404).json({ ok: false, message: 'Ruta no encontrada' });
});

// Middleware Global de Errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Servidor listo y ejecutándose en http://localhost:${PORT}`);
});