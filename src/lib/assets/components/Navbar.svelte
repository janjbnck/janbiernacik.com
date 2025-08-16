<script lang="ts">
	import { langSwitch } from '../scripts/langSwitch';
</script>

<nav class="h-[var(--spacing-x-large)] bg-[var(--color-background-transparent)] backdrop-blur-[var(--radius-blur)] fixed top-0 flex w-full items-center justify-between z-[999]">
	<div class="ml-[var(--spacing-medium)]"></div>
	<div></div>
	<div class="mr-[var(--spacing-medium)] [&>*]:ml-[var(--spacing-medium)] [&>*]:cursor-pointer [&>*]:text-xl [&>*]:hover:text-[var(--color-text)]! [&>*]:transition-all">
		<button class="navbar-link" aria-label="de" onclick={langSwitch}
		><i class="bi bi-globe"></i>
		</button>
	</div>
</nav>
