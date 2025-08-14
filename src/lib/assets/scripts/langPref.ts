import { browser } from '$app/environment';

export function hasLangPref() {
	if (browser) {
		if (localStorage.getItem('userLangPref')) {
			return true;
		} else {
			return false;
		}
	}
}

export function getLangPref() {
	if (browser) {
		if (localStorage.getItem('userLangPref')) {
			return localStorage.getItem('userLangPref');
		} else {
			return navigator.language.slice(0, 2);
		}
	}
}
