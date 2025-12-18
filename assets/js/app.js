function openNav() {
    document.getElementById("mobileNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
}
$(document).ready(function() {
    $('h2').each(function(index) {
        var id = 'section-' + index;
        $(this).attr('id', id);
        $('#toc-list').append('<a href="#' + id + '" style="display:block; padding:5px 0; color:#333;">' + $(this).text() + '</a>');
    });
});
