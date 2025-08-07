<script lang="ts">
	import { _ } from 'svelte-i18n';
	import LangChangeButton from '$lib/assets/components/LangChangeButton.svelte';
	import PageHeader from '$lib/assets/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Jan Biernacik - {$_('pages.homePage.pageTitle')}</title>
	<meta name="description" content={$_('pages.homePage.pageDesc')} />
	<meta name="keywords" content="Jan Biernacik, {$_('pages.homePage.pageTitle')}" />
	<meta name="author" content="Jan Biernacik" />
	<link rel="alternate" hreflang="en" href="https://janbiernacik.com" />
	<link rel="alternate" hreflang="de" href="https://janbiernacik.com" />
	<link rel="alternate" hreflang="x-default" href="https://janbiernacik.com" />
	<link rel="canonical" href="https://janbiernacik.com" />
</svelte:head>

<PageHeader noBackBtn={true} pageTitle={$_('miscMsg.maintenanceMode')} />
<LangChangeButton />

<a class="block" href="/privacy">{$_('pages.privacyPage.pageTitle')}</a>
