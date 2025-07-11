import { redirect, type Load } from '@sveltejs/kit';

export const load: Load = async (event) => {
	const parentData = await event.parent();
	if (!parentData.user) {
		throw redirect(302, '/login');
	}
};
