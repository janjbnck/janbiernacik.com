<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$lib/assets/components/PageHeader.svelte';
	import { t } from 'svelte-i18n';
</script>

<PageHeader pageTitle={page.status} />
<p>{$t('specialMsg.errorOccurred')}: {page.error.message}</p>