// src/lib/i18n/index.ts
import { init, register } from 'svelte-i18n';
import { browser } from '$app/environment';

register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/de.json'));

init({
	fallbackLocale: 'en',
	initialLocale: browser ? navigator.language.slice(0, 2) : 'en'
});
