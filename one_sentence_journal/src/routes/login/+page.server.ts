import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get('username')?.toString() ?? '';
		const password = formData.get('password')?.toString() ?? '';

		const envUser = process.env.AUTH_USERNAME ?? '';
		const envPass = process.env.AUTH_PASSWORD ?? '';

		if (username === envUser && password === envPass) {
			cookies.set('session', username, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: false,
				maxAge: 60 * 60 * 24
			});
			throw redirect(302, '/add');
		}

		return fail(401, { invalid: true });
	}
};
