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
            $("#menu").css({"opacity": "1", "visibility": "visible"});
        } else {
            $("#menu").css({"opacity": "0", "visibility": "hidden"});
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
            contact: "Kontakt",
            contactUrl: "mailto:jan@biernacik.dev",
            langSwitchUrl: "/en"
        },
        contentEN: {
            home: "Home",
            homeUrl: "/en",
            projects: "Projects",
            projectUrl: "https://github.com/janjbnck?tab=repositories",
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
                <ul id="menu-items">
                    <li><a href="${content.homeUrl}" class="menu-link">${content.home}</a></li>
                    <li><a href="${content.projectUrl}" class="menu-link">${content.projects}</a></li>
                    <li><a href="${content.contactUrl}" class="menu-link">${content.contact}</a></li>
                </ul>
            `);
        }
    });
}