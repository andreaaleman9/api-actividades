const prisma = require('../src/config/prisma');

async function main() {
  console.log('Poblando la base de datos...');

  // Crear Secciones
  const seccionA = await prisma.seccion.create({
    data: {
      anio: '3',
      especialidad: 'Desarrollo de Software',
      seccion: 'A'
    }
  });

  const seccionB = await prisma.seccion.create({
    data: {
      anio: '2',
      especialidad: 'Desarrollo de Software',
      seccion: 'B'
    }
  });

  // Crear Actividades asociadas
  await prisma.actividad.createMany({
    data: [
      {
        titulo: 'Feria de Logros Tecnica',
        descripcion: 'Presentacion de proyectos de software a la comunidad.',
        tipo: 'Exposicion',
        lugar: 'Cancha Tecnologica',
        fechaHora: new Date('2026-10-15T08:00:00Z'),
        organizador: 'Departamento de Computo',
        seccionId: seccionA.id
      },
      {
        titulo: 'Taller de Introduccion a Docker',
        descripcion: 'Capacitacion practica sobre contenedores.',
        tipo: 'Taller',
        lugar: 'Laboratorio 3',
        fechaHora: new Date('2026-09-20T10:00:00Z'),
        organizador: 'Docentes de Especialidad',
        seccionId: seccionB.id
      }
    ]
  });

  console.log('Base de datos poblada con exito.');
}

main()
  .catch((e) => {
    console.error('Error al ejecutar el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });