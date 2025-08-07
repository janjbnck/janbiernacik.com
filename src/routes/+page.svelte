<script lang="ts">
	import { _ } from 'svelte-i18n';
	import LangChangeButton from '$lib/assets/components/LangChangeButton.svelte';
</script>

<svelte:head>
	<title>Jan Biernacik - {$_('pages.homePage.pageTitle')}</title>
	<link rel="alternate" hreflang="en" href="https://janbiernacik.com" />
	<link rel="alternate" hreflang="de" href="https://janbiernacik.com" />
	<link rel="alternate" hreflang="x-default" href="https://janbiernacik.com" />
	<link rel="canonical" href="https://janbiernacik.com" />
</svelte:head>

<h1 class="text-3xl">{$_('miscMsg.maintenanceMode')}</h1>
<LangChangeButton />

<a class="block" href="/privacy">{$_('pages.privacyPage.pageTitle')}</a>
