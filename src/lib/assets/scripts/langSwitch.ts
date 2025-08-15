import { browser } from '$app/environment';
import { locale } from 'svelte-i18n';

export function langSwitch() {
	if (browser) {
		const userLang = localStorage.getItem('userLangPref')
			? localStorage.getItem('userLangPref')
			: navigator.language.slice(0, 2);

		if (userLang === 'de') {
			locale.set('en');
			localStorage.setItem('userLangPref', 'en');
			return 'en';
		} else {
			locale.set('de');
			localStorage.setItem('userLangPref', 'de');
			return 'de';
		}
	}

	const currentLang = localStorage.getItem('userLangPref');
	return currentLang;
}
