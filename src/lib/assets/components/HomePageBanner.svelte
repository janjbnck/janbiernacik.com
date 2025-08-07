<script lang="ts">
	import memoji from '$lib/assets/media/memoji-transparent.png';
	import { _ } from 'svelte-i18n';
</script>

<div class="banner">
	<div class="banner-items">
		<h1 class="banner-title text-4xl">Jan Biernacik</h1>
		<p class="banner-description">
			{@html $_('pages.homePage.slogan')}
		</p>
		<div class="banner-social-icon-wrapper">
			<a href="https://github.com/janjbnck" class="banner-social-icon"
				><i class="bi bi-github"></i></a
			>
			<a href="https://x.com/janjbnck" class="banner-social-icon"><i class="bi bi-twitter-x"></i></a
			>
			<a href="https://instagram.com/janjbnck" class="banner-social-icon"
				><i class="bi bi-instagram"></i></a
			>
			<a href="https://www.reddit.com/user/janjbnck/" class="banner-social-icon"
				><i class="bi bi-reddit"></i></a
			>
			<a href="https://www.linkedin.com/in/janjbnck/" class="banner-social-icon"
				><i class="bi bi-linkedin"></i></a
			>
			<a href="mailto:jan@biernacik.dev" class="banner-social-icon"
				><i class="bi bi-envelope-fill"></i></a
			>
		</div>
	</div>
	<img class="banner-image" src={memoji} alt="Mein Memoji" />
</div>

<style>
	.banner {
		margin: 0;
		padding: var(--spacing-normal) 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.banner-title {
		margin-bottom: var(--spacing-small);
		line-height: 1.1;
	}
	.banner-description {
		margin-top: 0;
		margin-bottom: var(--spacing-normal);
	}
	.banner-image {
		max-width: 250px;
	}
	.banner-social-icon-wrapper {
		padding-bottom: var(--spacing-normal);
	}
	.banner-social-icon {
		font-size: x-large;
		margin-right: var(--spacing-small);
	}

	@media screen and (max-width: 400px) {
		.banner-title {
			font-size: x-large;
		}
	}

	@media screen and (min-width: 801px) {
		.banner-title {
			font-size: 48px;
		}
	}

	@media screen and (max-width: 800px) {
		.banner {
			justify-content: space-around;
			flex-direction: row-reverse;
		}
		.banner-items {
			width: 100%;
		}
		.banner-image {
			width: 20%;
			margin-right: var(--spacing-normal);
		}
	}
	@media screen and (max-width: 320px) {
		.banner-image {
			display: none;
		}
	}
</style>
