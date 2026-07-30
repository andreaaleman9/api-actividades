# API de Gestión de Actividades

API RESTful desarrollada con Node.js, Express, Prisma y PostgreSQL para la gestión de actividades académicas organizadas por secciones. El proyecto cuenta con un entorno en la nube desplegado en Railway y un pipeline de CI/CD mediante GitHub Actions.

---

## Tecnologías Utilizadas

* **Lenguaje / Entorno:** Node.js (v20+)
* **Framework Web:** Express.js
* **ORM:** Prisma v6+ (`@prisma/client` & `@prisma/adapter-pg`)
* **Base de Datos:** PostgreSQL
* **Despliegue & Nube:** Railway
* **CI/CD:** GitHub Actions

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu equipo:
* [Node.js](https://nodejs.org/) (versión 20 o superior)
* [Git](https://git-scm.com/)
* Una instancia local o remota de PostgreSQL

---

## Configuración e Instalación Local

### 1. Clonar el repositorio
```bash
git clone [https://github.com/andreaaleman9/api-actividades.git](https://github.com/andreaaleman9/api-actividades.git)
cd api-actividades
```
### 2. Instalar dependencias
```bash
npm install90
```
### 3. Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto basándote en .env.example:
```bash
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://usuario:password@localhost:5432/db_actividades?schema=public"
```
### 4. Generar el cliente de Prisma y aplicar migraciones
```bash
npx prisma generate
npx prisma migrate dev
```
### 5. (Opcional) Poblar la base de datos con datos de prueba
```bash
npx prisma db seed
```
### 6. Iniciar el servidor
Modo desarrollo:
```bash
npm run dev
```
El servidor estará corriendo en http://localhost:3000.

# Método, Ruta, Descripción
GET /health, Verifica el estado del servidor y la conexión a PostgreSQL
GET /api/secciones, Obtiene el listado de secciones
POST /api/secciones, Crea una nueva sección
GET /api/actividades, Obtiene el listado de actividades registradas
POST /api/actividades, Crea una nueva actividad vinculada a una sección

# CI/CD y Despliegue en la Nube
CI (Integración Continua): Configurada mediante GitHub Actions (.github/workflows/ci-cd.yml). Ejecuta comprobaciones automáticas de instalación, compilación de Prisma, auditorías de seguridad y validación de archivos en cada push o pull_request a main.

CD (Despliegue Continuo): Integración directa con Railway, el cual detecta los cambios validados en GitHub, aplica las migraciones pendientes con npx prisma migrate deploy y despliega la API automáticamente.

# Documentación Adicional
Plan de Backups y Recuperación: Consulta el archivo BACKUPS.md para detalles sobre la estrategia de respaldos en PostgreSQL.
