<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Jan Biernacik</title>
	<meta name="description" content={$t('home.pageDescription')} />
	<link rel="canonical" href="https://janbiernacik.com" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<!--<h1>Jan Biernacik</h1>-->
<p class="text-xl">{@html $t('home.aboutMe')}</p>
<p>{$t('specialMsg.underConstruction')}</p>
