import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';
import getNavigatorLang from '../scripts/lang-init';

register('de', () => import('./locales/de.json'));
register('en', () => import('./locales/en.json'));

init({
	fallbackLocale: 'en',
	initialLocale: browser ? getNavigatorLang() : 'en'
});
