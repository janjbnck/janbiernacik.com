<script lang="ts">
	import '../app.css';

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
	<meta name="robots" content="index, follow" />
</svelte:head>

<main>
	{@render children?.()}
</main>
