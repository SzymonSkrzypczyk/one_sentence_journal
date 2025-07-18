import { Pool } from 'pg';
import { DATABASE_URL } from '$env/static/private';

export const pool = new Pool({
  connectionString: DATABASE_URL
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
