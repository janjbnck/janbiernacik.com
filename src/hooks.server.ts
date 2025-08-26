// hooks.server.ts
import { browser } from '$app/environment';
import type { Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.request.headers.get('accept-language')?.slice(0, 2);
	if (lang && !browser) {
		locale.set(lang);
	}
	return resolve(event);
};
