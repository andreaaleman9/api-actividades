# Plan de Respaldo y Recuperación ante Fallos (Disaster Recovery)

## 1. Alcance
Este plan aplica a la base de datos PostgreSQL en producción (Railway) que almacena la información de las tablas `Seccion` y `Actividad`.

## 2. Estrategia y Frecuencia de Respaldos
* **Respaldos Automáticos (Diarios):** Ejecutados a las 02:00 UTC mediante las herramientas integradas del proveedor de nube (Railway PostgreSQL).
* **Respaldos Lógicos (Semanales):** Generación manual o por script mediante la herramienta nativa `pg_dump`.
* **Retención:** 30 días para backups diarios y 6 meses para los backups semanales.

## 3. Ubicación del Almacenamiento
* **Primario:** Infraestructura cifrada del proveedor en nube (Railway / AWS storage).
* **Secundario (Off-site):** Copias comprimidas `.sql` descargadas y almacenadas en un almacenamiento seguro en la nube (AWS S3 / Google Cloud Storage) aislado del entorno de producción.

## 4. Procedimiento de Recuperación ante Fallos (Disaster Recovery)

En caso de pérdida de datos o indisponibilidad del servicio:

1. **Notificación e Aislamiento:** Detener temporalmente el servicio de la API para prevenir inconsistencias.
2. **Obtención del Respaldo:** Descargar el último archivo dump `.sql` válido.
3. **Restauración de la Base de Datos:**
   Ejecutar el comando de restauración conectándose a la base de datos destino:
   ```bash
   psql "DATABASE_URL_PRODUCCION" < backup_reciente.sql