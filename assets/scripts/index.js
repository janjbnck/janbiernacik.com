function getRepos() {
    jQuery(function() {
        $.get('https://api.github.com/users/janjbnck/repos', function (repos) {
            repos.forEach(repo => {
                $('.repo-list').append(`
                    <a class="repo-item-wrapper" href="${repo.html_url}"><div class="repo-item">
                        <h3 class="repo-item-title">${repo.name}</h3>
                        <p  class="repo-item-description">${repo.description || 'No description'}</p>
                    </div></a>
                `);
            });
        });
    });
}