import { query } from '$lib/db';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async () => {
	const res = await query(`SELECT date, text FROM sentences ORDER BY date DESC`);
	return {
		sentences: res.rows
	};
};
