function openNav() {
    document.getElementById("mobileNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
}
$(document).ready(function() {
    // Tự động tạo mục lục từ thẻ H2
    $('h2').each(function(index) {
        var id = 'section-' + index;
        $(this).attr('id', id);
        // Thêm vào #toc-list (giờ đã nằm bên trái)
        $('#toc-list').append('<a href="#' + id + '">' + $(this).text() + '</a>');
    });
});
