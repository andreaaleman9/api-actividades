// src/config/prisma.js
require('dotenv').config();
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('../generated/prisma');

// Configuración de la conexión mediante el pool de pg
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// Instanciación de Prisma con el adapter requerido en Prisma v7
const prisma = new PrismaClient({ adapter });

module.exports = prisma;