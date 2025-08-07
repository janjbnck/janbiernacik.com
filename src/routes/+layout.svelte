<script lang="ts">
	import '../app.css';
	import '$lib/assets/fonts/fonts.css';
	import favicon from '$lib/assets/favicon.svg';

	import { _ } from 'svelte-i18n';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#16161d" />
</svelte:head>

<main>
	{@render children?.()}
</main>
