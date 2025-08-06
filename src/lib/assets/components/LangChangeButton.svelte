<script lang="ts">
	import { text } from '@sveltejs/kit';
	import { getLocaleFromNavigator, locale } from 'svelte-i18n';

	const userDefaultLang: string = String(getLocaleFromNavigator()).slice(0, 2);
	let langId: number;

	if (userDefaultLang.slice(0, 2) === 'de') {
		langId = 2;
	} else {
		langId = 1;
	}

	const changeLanguage = () => {
		if (langId !== 2) {
			locale.set('de');
			langId = 2;
		} else {
			locale.set('en');
			langId = 1;
		}
	};
</script>

<button on:click={changeLanguage}>Change Language</button>
