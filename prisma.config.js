require('dotenv').config();

module.exports = {
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL,
  },
};

module.exports = {
  migrations: {
    seed: 'node ./prisma/seed.js',
  },
};