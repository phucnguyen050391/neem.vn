// Mở Menu Mobile
function openNav() {
    document.getElementById("mobileNav").style.width = "100%";
}

// Đóng Menu Mobile
function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
}

$(document).ready(function() {
    // Tự động tạo mục lục từ thẻ H2
    $('h2').each(function(index) {
        var id = 'section-' + index;
        $(this).attr('id', id);
        // Thêm vào sidebar phải
        $('#toc-list').append('<a href="#' + id + '" style="display:block; padding:5px 0; color:#333;">' + $(this).text() + '</a>');
    });
});
