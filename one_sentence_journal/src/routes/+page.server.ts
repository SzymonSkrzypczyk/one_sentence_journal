import { query } from '$lib/db';
import type { ServerLoad } from '@sveltejs/kit';

type Sentence = {
  date: string;
  text: string;
};

export const load: ServerLoad = async () => {
  const res = await query('SELECT date, text FROM sentences ORDER BY date DESC');
  const sentences: Sentence[] = res.rows.map(row => ({
    date: row.date instanceof Date ? row.date.toISOString().slice(0, 10) : row.date,
    text: row.text
  }));

  return { sentences };
};
