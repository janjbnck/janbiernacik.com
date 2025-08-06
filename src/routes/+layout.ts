// +layout.ts
import { browser } from '$app/environment';
import '$lib/assets/i18n';
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	if (browser) {
		if (localStorage.getItem('userLang') === null || undefined) {
			locale.set(String(window.navigator.language).slice(0, 2));
		} else {
			locale.set(String(localStorage.getItem('userLang')).slice(0, 2));
		}
	}
	await waitLocale();
};
