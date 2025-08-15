<script lang="ts">
	import { t } from 'svelte-i18n';
	import { page } from '$app/state';
</script>

{#if page.url.pathname !== '/privacy'}
	<div>
		<a href="/privacy">{$t('privacy.pageTitle')}</a>
	</div>
{/if}

<style>
	@reference 'tailwindcss';
	
	div {
		@apply flex flex-col items-start;
	}
</style>
