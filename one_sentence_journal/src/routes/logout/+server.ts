import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies }) => {
	cookies.delete('session', { path: '/' });
	return new Response(null, { status: 204 });
};
