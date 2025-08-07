// +layout.ts
import '$lib/assets/i18n';
import { waitLocale, locale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import getNavigatorLang from '$lib/assets/scripts/lang-init';
import { browser } from '$app/environment';

export const load: LayoutLoad = async () => {
	if (browser) {
		locale.set(getNavigatorLang());
	}
	await waitLocale();
};
