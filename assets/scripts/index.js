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

function loadHeader() {
    const headerContent = {
        contentDE: {
            home: "Startseite",
            homeUrl: "/de",
            projects: "Projekte",
            projectUrl: "https://github.com/janjbnck?tab=repositories",
            about: "Über mich",
            aboutUrl: "/de/about",
            contact: "Kontakt",
            contactUrl: "mailto:jan@biernacik.dev",
            langSwitchUrl: "/en"
        },
        contentEN: {
            home: "Home",
            homeUrl: "/en",
            projects: "Projects",
            projectUrl: "https://github.com/janjbnck?tab=repositories",
            about: "About Me",
            aboutUrl: "/en/about",
            contact: "Contact",
            contactUrl: "mailto:jan@biernacik.dev",
            langSwitchUrl: "/de"
        }
    }

    let content;
    if (document.documentElement.lang === "de") {
        content = headerContent.contentDE;
    } else {
        content = headerContent.contentEN;
    }

    let currentPath = window.location.pathname;
    currentPath = currentPath.substring(3);
    content.langSwitchUrl = content.langSwitchUrl + currentPath;

    $(function() {
        if ($("#navbar").length) {
            $("#navbar").html(`
                <div class="navbar-items navbar-items-left">
                    <a id="menu-button" class="navbar-link" onclick="toggleMenu();"><i class="bi bi-list"></i></a>
                </div>
                <div class="navbar-items navbar-items-center">
                    <a href="${content.homeUrl}" class="navbar-link">${content.home}</a>
                    <a href="${content.projectUrl}" class="navbar-link">${content.projects}</a>
                    <a href="${content.aboutUrl}" class="navbar-link">${content.about}</a>
                    <a href="${content.contactUrl}" class="navbar-link">${content.contact}</a>
                </div>
                <div class="navbar-items navbar-items-right">
                    <a href="${content.langSwitchUrl}" class="navbar-link"><i class="bi bi-globe"></i></a>
                    <a href="https://github.com/janjbnck" class="navbar-link"><i class="bi bi-github"></i></a>
                </div>
            `);
        }
        if ($("#menu").length) {
            $("#menu").html(`
                <div onclick="toggleMenu();" id="menu-closer"></div>
                <ul id="menu-items">
                    <li><a href="${content.homeUrl}" class="menu-link">${content.home}</a></li>
                    <li><a href="${content.projectUrl}" class="menu-link">${content.projects}</a></li>
                    <li><a href="${content.aboutUrl}" class="menu-link">${content.about}</a></li>
                    <li><a href="${content.contactUrl}" class="menu-link">${content.contact}</a></li>
                </ul>
            `);
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