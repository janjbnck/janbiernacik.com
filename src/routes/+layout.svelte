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

<header>
	<Navbar />
</header>

<main>
	{@render children?.()}
</main>

<footer>
	<Footer />
</footer>
