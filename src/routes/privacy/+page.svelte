<script lang="ts">
	import { _ } from 'svelte-i18n';
	import PageHeader from '$lib/assets/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Jan Biernacik - {$_('pages.privacyPage.pageTitle')}</title>
	<meta name="description" content={$_('pages.privacyPage.pageDesc')} />
	<meta name="keywords" content="Jan Biernacik, {$_('pages.privacyPage.pageTitle')}" />
	<meta name="author" content="Jan Biernacik" />
	<link rel="alternate" hreflang="en" href="https://janbiernacik.com/privacy" />
	<link rel="alternate" hreflang="de" href="https://janbiernacik.com/privacy" />
	<link rel="alternate" hreflang="x-default" href="https://janbiernacik.com/privacy" />
	<link rel="canonical" href="https://janbiernacik.com/privacy" />
</svelte:head>

<PageHeader pageTitle={$_('pages.privacyPage.pageTitle')} />

<h2 class="text-2xl">{$_('pages.privacyPage.sections.generalInfo.sectionTitle')}</h2>
<p>{$_('pages.privacyPage.sections.generalInfo.sectionContent.notice')}</p>

<h2 class="text-2xl">{$_('pages.privacyPage.sections.responsibleAuthority.sectionTitle')}</h2>
<p>{$_('pages.privacyPage.sections.responsibleAuthority.sectionContent.introduction')}</p>
<p>{@html $_('pages.privacyPage.sections.responsibleAuthority.sectionContent.data')}</p>
<p>E-Mail: <a href="mailto:jan@biernacik.dev">jan@biernacik.dev</a></p>

<h2 class="text-2xl">{$_('pages.privacyPage.sections.hosting.sectionTitle')}</h2>
<p>{$_('pages.privacyPage.sections.hosting.sectionContent.introduction')}</p>
<ul>{@html $_('pages.privacyPage.sections.hosting.sectionContent.dataList')}</ul>
<p>{$_('pages.privacyPage.sections.hosting.sectionContent.gdprNotice')}</p>
<p>{@html $_('pages.privacyPage.sections.hosting.sectionContent.providerInfo')}</p>
<a href={$_('pages.privacyPage.sections.hosting.sectionContent.privacyPolicyUrl')}
	>{$_('miscMsg.privacyPolicy')}
</a>

<h2 class="text-2xl">{$_('pages.privacyPage.sections.embeddedServices.sectionTitle')}</h2>

<h3 class="text-xl">
	{$_('pages.privacyPage.sections.embeddedServices.sectionContent.analytics.subsectionTitle')}
</h3>
<p>{$_('pages.privacyPage.sections.embeddedServices.sectionContent.analytics.introduction')}</p>
<p>
	{@html $_('pages.privacyPage.sections.embeddedServices.sectionContent.analytics.providerInfo')}
</p>
<a
	href={$_('pages.privacyPage.sections.embeddedServices.sectionContent.analytics.privacyPolicyUrl')}
	>{$_('miscMsg.privacyPolicy')}</a
>

<h3 class="text-xl">
	{$_('pages.privacyPage.sections.embeddedServices.sectionContent.github.subsectionTitle')}
</h3>
<p>{$_('pages.privacyPage.sections.embeddedServices.sectionContent.github.introduction')}</p>
<p>
	{@html $_('pages.privacyPage.sections.embeddedServices.sectionContent.github.providerInfo')}
</p>
<a href={$_('pages.privacyPage.sections.embeddedServices.sectionContent.github.privacyPolicyUrl')}
	>{$_('miscMsg.privacyPolicy')}</a
>

<h3 class="text-xl">
	{$_('pages.privacyPage.sections.embeddedServices.sectionContent.icons.subsectionTitle')}
</h3>
<p>{$_('pages.privacyPage.sections.embeddedServices.sectionContent.icons.introduction')}</p>
<p>
	{@html $_('pages.privacyPage.sections.embeddedServices.sectionContent.icons.providerInfo')}
</p>
<a href={$_('pages.privacyPage.sections.embeddedServices.sectionContent.icons.privacyPolicyUrl')}
	>{$_('miscMsg.privacyPolicy')}</a
>

<h3 class="text-xl">
	{$_('pages.privacyPage.sections.embeddedServices.sectionContent.fonts.subsectionTitle')}
</h3>
<p>{$_('pages.privacyPage.sections.embeddedServices.sectionContent.fonts.introduction')}</p>

<h2 class="text-2xl">{$_('pages.privacyPage.sections.rights.sectionTitle')}</h2>
<p>{$_('pages.privacyPage.sections.rights.sectionContent.introduction')}</p>
<ul>{@html $_('pages.privacyPage.sections.rights.sectionContent.rightsList')}</ul>
<p>{$_('pages.privacyPage.sections.rights.sectionContent.contactNotice')}</p>

<h2 class="text-2xl">{@html $_('pages.privacyPage.sections.changeNotice.sectionTitle')}</h2>
<p>{$_('pages.privacyPage.sections.changeNotice.sectionContent.introduction')}</p>
<p>{@html $_('pages.privacyPage.sections.changeNotice.sectionContent.lastMod')}</p>
