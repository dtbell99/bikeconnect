const { Client } = require("pg");

const env = process.env.ENVIRONMENT;

const ssl = env === "local" ? false : true;

export function getClient() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl,
  });

  return client;
}

// import { Pool } from "pg";
// const pool = new Pool({
//   host: 'localhost',
//   user: 'database-user',
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
//   maxLifetimeSeconds: 60
// })
// export function getConnection() {
//   return db;
// }
