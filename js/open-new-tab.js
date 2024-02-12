document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("a[href^='http']:not([href*='" + window.location.hostname + "'])");
    links.forEach(function (link) {
        link.setAttribute('target', '_new');
    });
});
