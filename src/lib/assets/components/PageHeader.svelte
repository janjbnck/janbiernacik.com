<script>
	import { t } from 'svelte-i18n';
	let { pageTitle } = $props();
</script>

<div class="pt-[var(--spacing-x-large)]">
	<h1>{pageTitle}</h1>
	<a href="/" class="hover:text-[var(--color-text)]! no-underline!"><i class="bi bi-arrow-left-circle-fill"></i> {$t('specialMsg.goBack')}</a>
</div>

