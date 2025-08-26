<script lang="ts">
	import '../app.css';

	import Footer from '$lib/assets/components/Footer.svelte';
	import Navbar from '$lib/assets/components/Navbar.svelte';
	import { getLangPref } from '$lib/assets/scripts/langPref';
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

<main class="px-[var(--spacing-medium)] ml-auto mr-auto max-w-[1000px]">
	{@render children?.()}
</main>

<footer class="px-[var(--spacing-medium)] pb-[var(--spacing-x-large)] mx-auto max-w-[1000px]">
	<Footer />
</footer>
