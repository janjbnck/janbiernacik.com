<script>
	import { t } from 'svelte-i18n';
	let { pageTitle } = $props();
</script>

<h1>{pageTitle}</h1>
<a href="/"><i class="bi bi-arrow-left-circle-fill"></i> {$t('specialMsg.goBack')}</a>

<style>
	@reference 'tailwindcss';
	@import '$lib/assets/styles/vars.css';

	a {
		@apply hover:text-(--color-text) no-underline;
	}
</style>
