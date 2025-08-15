<div id="banner">
    <div id="banner-content">
        <h1 id="banner-title">Jan Biernacik</h1>
        <div id="social-icons">
            <a href="https://github.com/janjbnck" aria-label="GitHub"><i class="bi bi-github"></i></a>
            <a href="https://x.com/janjbnck" aria-label="X"><i class="bi bi-twitter-x"></i></a>
            <a href="https://instagram.com/janjbnck" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.reddit.com/user/janjbnck/" aria-label="Reddit"><i class="bi bi-reddit"></i></a>
            <a href="https://www.linkedin.com/in/janjbnck/" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a href="mailto:jan@biernacik.dev" aria-label="Email"><i class="bi bi-envelope-fill"></i></a>
        </div>
    </div>
    <img src="/memoji.png" alt="My Memoji" />
</div>

<style>
    @reference 'tailwindcss';

    #banner {
        @apply flex justify-between items-center pt-(--spacing-large) pb-(--spacing-x-large) max-md:flex-col-reverse;
    }

    #banner-content {
        @apply max-md:w-full;
    }

    #banner-title {
        @apply my-0 text-6xl text-(--color-text) pb-(--spacing-x-small) max-md:text-4xl max-md:pt-(--spacing-medium) max-md:text-center;
    }

    #social-icons {
        @apply max-md:text-center;
    }

    #social-icons a {
        @apply text-2xl text-(--color-highlight) hover:text-(--color-text) mr-(--spacing-small) transition-all max-md:mx-(--spacing-x-small);
    }

    img {
        @apply max-w-[250px] max-md:max-w-[150px] max-md:text-center brightness-85;
    }
</style>