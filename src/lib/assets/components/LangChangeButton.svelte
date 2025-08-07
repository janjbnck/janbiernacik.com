<script lang="ts">
	import { browser } from '$app/environment';
	import { locale, _ } from 'svelte-i18n';
	import getNavigatorLang from '../scripts/lang-init';

	const langSwitchFunction = () => {
		if (browser) {
			if (localStorage.getItem('userLangPref')) {
				const lang = String(localStorage.getItem('userLangPref'));
				if (lang === 'de') {
					locale.set('en');
					localStorage.setItem('userLangPref', 'en');
				}
				if (lang === 'en') {
					locale.set('de');
					localStorage.setItem('userLangPref', 'de');
				}
			} else {
				const lang = String(getNavigatorLang());
				if (lang === 'de') {
					locale.set('en');
					localStorage.setItem('userLangPref', 'en');
				}
				if (lang === 'en') {
					locale.set('de');
					localStorage.setItem('userLangPref', 'de');
				}
			}
		}
	};
</script>

<button on:click={langSwitchFunction}
	><i class="bi bi-globe"></i> {$_('functions.langSwitch')}</button
>
