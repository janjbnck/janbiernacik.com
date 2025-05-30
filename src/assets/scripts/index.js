function getRepos() {
    $(function() {
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

function toggleMenu() {
    $(function() {
        var menuOpen = $("#menu").css("visibility") === "visible";
        if(!menuOpen) {
            $("body").css({"overflow": "hidden"});
            $("#navbar").css({"background-color": "var(--color-background-alt)"});
            $("#menu").css({"opacity": "1", "visibility": "visible"});
            $("#menu-items").css({"transform": "translateX(var(--spacing-small))"});
            setTimeout(function() {
                $("#menu-items").css({"transform": "translateX(0)"});
            }, 500);
        } else {
            $("body").css({"overflow": "auto"});
            $("#navbar").css({"background-color": "var(--color-background-alt-transparent)"});
            $("#menu").css({"opacity": "0", "visibility": "hidden"});
            $("#menu-items").css({"transform": "translateX(-100%)"});
        }
    });
}

$(window).on("resize", function() {
    var menuOpen = $("#menu").css("visibility") === "visible";
    if(menuOpen && $(window).width() > 800) {
        $("body").css({"overflow": "auto"});
    } else if (menuOpen && $(window).width() <= 800) {
        $("body").css({"overflow": "hidden"});
    }
});