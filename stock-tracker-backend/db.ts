import {Client} from 'pg';

export const client: Client = new Client({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || ''),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
