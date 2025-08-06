import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const fallbackLocale = 'en';
if (browser) {
	if (localStorage.getItem('userLang') == null || undefined) {
		localStorage.setItem('userLang', String(navigator.language).slice(0, 2));
	}
}

register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/de.json'));

init({
	fallbackLocale: fallbackLocale,
	initialLocale: browser ? String(localStorage.getItem('userLang')) : fallbackLocale
});
