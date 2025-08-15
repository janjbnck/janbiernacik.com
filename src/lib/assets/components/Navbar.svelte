<script lang="ts">
	import { langSwitch } from '../scripts/langSwitch';
</script>

<nav id="navbar">
	<div id="navbar-items-left"></div>
	<div id="navbar-items-center"></div>
	<div id="navbar-items-right">
		<button class="navbar-link" aria-label="de" onclick={langSwitch}
		><i class="bi bi-globe"></i>
		</button>
	</div>
</nav>

<style>
	@reference 'tailwindcss';

	#navbar {
		@apply h-(--spacing-x-large) bg-(--color-background-transparent) backdrop-blur-(--radius-blur) fixed top-[0] flex w-full items-center justify-between;
	}
	#navbar-items-right {
		@apply mr-(--spacing-medium);
	}
	#navbar-items-right .navbar-link {
		@apply ml-(--spacing-small);
	}

	.navbar-link {
		@apply cursor-pointer text-xl hover:text-(--color-text) transition-all;
	}
</style>
