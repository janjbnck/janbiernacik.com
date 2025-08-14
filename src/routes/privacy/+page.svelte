<script lang="ts">
	import { t } from 'svelte-i18n';
	import PageHeader from '$lib/assets/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Jan Biernacik - {$t('privacy.pageTitle')}</title>
	<meta name="description" content={$t('privacy.pageDescription')} />
	<link rel="canonical" href="https://janbiernacik.com/privacy" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<PageHeader pageTitle={$t('privacy.pageTitle')} />
<p>{@html $t('privacy.lastUpdated')}</p>

<h2>{$t('privacy.general.title')}</h2>
<p>{$t('privacy.general.body')}</p>

<h2>{$t('privacy.controller.title')}</h2>
<p>
	{$t('privacy.controller.name')}<br />{$t('privacy.controller.address')}<br />{$t(
		'privacy.controller.email.label'
	)}:&nbsp;
	<a href={$t('privacy.controller.email.mailto')}>{$t('privacy.controller.email.value')}</a>
</p>

<h2>{$t('privacy.hosting.title')}</h2>
<p>{$t('privacy.hosting.body')}</p>
<h3>{$t('privacy.hosting.logs.title')}</h3>
<ul>
	{#each $t('privacy.hosting.logs.items') as item}
		<li>{item}</li>
	{/each}
</ul>
<h3>{$t('privacy.hosting.provider.label')}</h3>
<p>
	{$t('privacy.hosting.provider.name')}
	<br />{$t('privacy.hosting.provider.address')}<br /><a
		href={$t('privacy.hosting.provider.privacy.url')}
		>{$t('privacy.hosting.provider.privacy.label')}</a
	>
</p>

<h2>{$t('privacy.services.title')}</h2>
<h3>{$t('privacy.services.analytics.title')}</h3>
<p>{$t('privacy.services.analytics.body')}</p>
<p>{$t('privacy.services.analytics.legalBasis')}</p>
<p>
	{$t('privacy.services.analytics.provider.name')}<br />{$t(
		'privacy.services.analytics.provider.address'
	)}<br /><a href={$t('privacy.services.analytics.provider.privacy.url')}
		>{$t('privacy.services.analytics.provider.privacy.label')}</a
	>
</p>
<h3>{$t('privacy.services.github.title')}</h3>
<p>{$t('privacy.services.github.body')}</p>
<p>
	{$t('privacy.services.github.provider.name')}<br />{$t(
		'privacy.services.github.provider.address'
	)}<br /><a href={$t('privacy.services.github.provider.privacy.url')}
		>{$t('privacy.services.github.provider.privacy.label')}</a
	>
</p>

<h2>{$t('privacy.rights.title')}</h2>
<p>{$t('privacy.rights.intro')}</p>
<ul>
	{#each $t('privacy.rights.items') as item}
		<li>{item}</li>
	{/each}
</ul>
<p>{$t('privacy.rights.contactHint')}</p>

<h2>{$t('privacy.changes.title')}</h2>
<p>{$t('privacy.changes.body')}</p>
