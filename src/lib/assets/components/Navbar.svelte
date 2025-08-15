<script lang="ts">
	import { browser } from '$app/environment';
	import { getLangPref } from '../scripts/langPref';
	import { langSwitch } from '../scripts/langSwitch';
	if (browser) var currentLang: String = String(getLangPref());
</script>

<nav id="navbar">
	<div id="navbar-items-left"></div>
	<div id="navbar-items-center"></div>
	<div id="navbar-items-right">
		<button class="navbar-link" aria-label="de" onclick={() => {
    langSwitch();
    currentLang = String(getLangPref());
  }}
			><i class="bi bi-globe flex items-center"><span class="text-sm text-white uppercase not-italic">&nbsp;{currentLang}</span></i>
		</button>
		<a class="navbar-link" aria-label="GitHub" href="https://github.com/janjbnck"
			><i class="bi bi-github"></i></a
		>
	</div>
</nav>

<style>
	@reference 'tailwindcss';

	#navbar {
		@apply h-(--spacing-x-large) bg-(--color-background-transparent) backdrop-blur-(--radius-blur) fixed top-[0] flex w-full items-center justify-between;
	}
	#navbar-items-right {
		@apply mr-(--spacing-medium) flex items-center;
	}
	#navbar-items-right .navbar-link {
		@apply ml-(--spacing-small);
	}

	.navbar-link {
		@apply cursor-pointer text-xl;
	}
</style>
