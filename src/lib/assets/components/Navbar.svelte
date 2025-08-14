<nav id="navbar">
	<div id="navbar-items-left"></div>
	<div id="navbar-items-center"></div>
	<div id="navbar-items-right">
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
		@apply mr-(--spacing-medium);
	}

	.navbar-link {
		@apply text-xl;
	}
</style>
