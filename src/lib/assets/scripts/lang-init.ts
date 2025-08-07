import { browser } from '$app/environment';

function getNavigatorLang() {
	if (browser) {
		if (localStorage.getItem('userLangPref')) {
			const initialNavigatorLang: string = String(localStorage.getItem('userLangPref'));
			return initialNavigatorLang;
		} else {
			const initialNavigatorLang: string = String(navigator.language).slice(0, 2);
			return initialNavigatorLang;
		}
	}
}

export default getNavigatorLang;
