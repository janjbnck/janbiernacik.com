<script lang="ts">
	import { _ } from 'svelte-i18n';
	import LangChangeButton from '$lib/assets/components/LangChangeButton.svelte';
</script>

<h1 class="text-2xl">{$_('miscMsg.maintenanceMode')}</h1>
<LangChangeButton />
