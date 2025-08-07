<script lang="ts">
	import { _ } from 'svelte-i18n';

	export let pageTitle;
	export let noBackBtn: boolean = false;
</script>

<h1 style="margin-bottom: 0;" class="text-3xl">{pageTitle}</h1>
{#if noBackBtn == false}
	<a href="/">{$_('functions.back')}</a>
{/if}
