<script lang="ts">
	import { browser } from '$app/environment';
	import { locale, _ } from 'svelte-i18n';

	const langSwitchFunction = () => {
		if (browser) {
			if (localStorage.getItem('userLang') != null || undefined) {
				let userLang: string = String(localStorage.getItem('userLang')).slice(0, 2);
				if (userLang === 'de') {
					locale.set('en');
					localStorage.setItem('userLang', 'en');
				} else {
					locale.set('de');
					localStorage.setItem('userLang', 'de');
				}
			} else {
				let currentLang: string = String($locale).slice(0, 2);
				if (currentLang === 'de') {
					locale.set('en');
					localStorage.setItem('userLang', 'en');
				} else {
					locale.set('de');
					localStorage.setItem('userLang', 'de');
				}
			}
		}
	};
</script>

<button on:click={langSwitchFunction}
	><i class="bi bi-globe"></i> {$_('functions.langSwitch')}</button
>

<style>
	button {
		margin: 4px 0;
		background-color: lightgray;
		border: solid 4px lightgray;
		border-radius: 2px;
		cursor: pointer;
	}
</style>
