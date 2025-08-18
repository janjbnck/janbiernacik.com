<script lang="ts">
	import Banner from '$lib/assets/components/Banner.svelte';
import { t } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Jan Biernacik</title>
	<meta name="description" content={$t('home.pageDescription')} />
	<link rel="canonical" href="https://janbiernacik.com" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<Banner />

<p>{@html $t('home.aboutMe')}</p>
