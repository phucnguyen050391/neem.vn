$(document).ready(function () {
    // --- 1. Tạo mục lục tự động từ thẻ H2 ---
    var data = document.querySelectorAll("h2");
    var parent = document.getElementById('menu-right');
    var parentSub = document.getElementById('subNav').querySelector('.overlay-content');

    for (var i = 0; i < data.length; i++) {
        // Tạo link mục lục, chỉnh màu chữ đen/xám đậm cho dễ nhìn
        var newChild = '<a href="#' + data[i].id + '" style="color: #333; display:block; padding: 5px 0;">' + data[i].innerText + '</a>';
        
        // Thêm vào sidebar bên phải
        if(parent) parent.insertAdjacentHTML('beforeend', newChild);
        
        // Thêm vào submenu trên mobile
        if(parentSub) parentSub.insertAdjacentHTML('beforeend', newChild);
    }
});

// --- 2. Xử lý sự kiện cuộn trang (Scroll) ---
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    
    // Highlight mục lục đang đọc
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance + 150) {
            $('.content-menu a.active').removeClass('active');
            $('.content-menu a').eq(i).addClass('active');
        }
    });
    
    // Hiển thị nút Back to top khi cuộn xuống 100px
    if ($(this).scrollTop() > 100) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
}).scroll();

// --- 3. Sự kiện click nút Back to top ---
$('#toTop').click(function(){
    $('html, body').animate({scrollTop : 0}, 200);
    return false;
});

// --- 4. Các hàm đóng mở Menu Mobile ---
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
