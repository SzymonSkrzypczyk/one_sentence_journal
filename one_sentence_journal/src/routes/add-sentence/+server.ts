import type { RequestHandler } from '@sveltejs/kit';
import { query } from '$lib/db';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { sentence } = await request.json();

  if (!sentence || typeof sentence !== 'string' || !sentence.trim()) {
    return json({ error: 'Invalid sentence' }, { status: 400 });
  }

  try {
    const existing = await query(`SELECT 1 FROM sentences WHERE date = CURRENT_DATE`);

    if ((existing.rowCount ?? 0) > 0) {
      return json({ error: 'Sentence for today has already been added.' }, { status: 409 });
    }

    // Insert new sentence
    await query(
      `INSERT INTO sentences (text, date) VALUES ($1, CURRENT_DATE)`,
      [sentence.trim()]
    );

    return json({ success: true });
  } catch (err) {
    console.error('DB insert error:', err);
    return json({ error: 'Database error' }, { status: 500 });
  }
};
