// target="_black" all <a></a>
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("a");

    links.forEach(function(link) {
        link.setAttribute("target", "_blank");
    });
});

// class="tooltip-link" data-tooltip="Este link será aberto em uma nova aba"
document.addEventListener("DOMContentLoaded", function() {
    var links = document.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.classList.add("tooltip-link");
        link.classList.add("card-content");
        link.setAttribute("data-tooltip", "Este link será aberto em uma nova aba");
    }
});

// tooltip all <a></a>
document.addEventListener("DOMContentLoaded", function() {
    var tooltipLinks = document.querySelectorAll(".tooltip-link");

    tooltipLinks.forEach(function(link) {
        var tooltipText = link.getAttribute("data-tooltip");
        link.setAttribute("title", tooltipText);
    });
});