$(document).ready(function () {
    // 1. Tự động tạo mục lục từ thẻ H2
    var data = document.querySelectorAll("h2");
    var parent = document.getElementById('menu-right');
    var parentSub = document.getElementById('subNav').querySelector('.overlay-content');

    // Nếu tìm thấy thẻ H2 và nơi chứa mục lục
    if(data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            // Tạo ID cho thẻ H2 nếu chưa có
            if(!data[i].id) {
                data[i].id = "section-" + i;
            }
            var newChild = '<a href="#' + data[i].id + '" style="color: #333; display:block; padding: 5px 0;">' + data[i].innerText + '</a>';
            
            // Thêm vào sidebar bên phải (PC)
            if(parent) parent.insertAdjacentHTML('beforeend', newChild);
            // Thêm vào menu mobile
            if(parentSub) parentSub.insertAdjacentHTML('beforeend', newChild);
        }
    }
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    
    // 2. Highlight mục lục khi cuộn
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance + 150) {
            $('.content-menu a.active').removeClass('active');
            $('.content-menu a').eq(i).addClass('active');
        }
    });

    // 3. Ẩn/Hiện nút Back to top
    if ($(this).scrollTop() > 100) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
}).scroll();

// 4. Xử lý click nút Back to top
$('#toTop').click(function(){
    $('html, body').animate({scrollTop : 0}, 200);
    return false;
});

// 5. Các hàm mở/đóng menu Mobile
function openNav() { document.getElementById("mainNav").style.display = "block"; }
function closeNav() { document.getElementById("mainNav").style.display = "none"; }
function openSubNav() { document.getElementById("subNav").style.display = "block"; }
function closeSubNav() { document.getElementById("subNav").style.display = "none"; }
