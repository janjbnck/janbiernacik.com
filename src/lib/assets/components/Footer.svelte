<script lang="ts">
	import { t } from 'svelte-i18n';
	import { page } from '$app/state';
</script>

{#if page.url.pathname !== '/privacy'}
	<a href="/privacy">{$t('privacy.pageTitle')}</a>
	<a href="https://github.com/janjbnck">GitHub</a>
{/if}

<style>
	a {
		@apply block;
	}
</style>
