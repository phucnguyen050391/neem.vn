$(document).ready(function () {

    // TOC
    var headings = document.querySelectorAll("h2");
    var toc = document.getElementById("menu-right");
    var sub = document.querySelector("#subNav .overlay-content");

    headings.forEach(h => {
        if (!h.id) return;
        var link = `<a href="#${h.id}">${h.innerText}</a>`;
        if (toc) toc.insertAdjacentHTML("beforeend", link);
        if (sub) sub.insertAdjacentHTML("beforeend", link);
    });
});

// Scroll highlight + back to top
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$('#toTop').click(function () {
    $('html, body').animate({scrollTop: 0}, 200);
    return false;
});

// MENU
function openNav() {
    document.getElementById("mainNav").style.display = "block";
}
function closeNav() {
    document.getElementById("mainNav").style.display = "none";
}
function openSubNav() {
    document.getElementById("subNav").style.display = "block";
}
function closeSubNav() {
    document.getElementById("subNav").style.display = "none";
}
