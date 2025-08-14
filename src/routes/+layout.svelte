<script lang="ts">
	import '../app.css';

	import Footer from '$lib/assets/components/Footer.svelte';
	import Navbar from '$lib/assets/components/Navbar.svelte';
	import { getLangPref, hasLangPref } from '$lib/assets/scripts/langPref';
	import { locale } from 'svelte-i18n';
	import { onMount } from 'svelte';

	onMount(() => {
		locale.set(getLangPref());
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="Jan Biernacik" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="var(--color-background)" />
	<script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
</svelte:head>

<header>
	<Navbar />
</header>

<main>
	{@render children?.()}
</main>

<footer>
	<Footer />
</footer>
