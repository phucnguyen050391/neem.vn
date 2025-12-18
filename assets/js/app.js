$(document).ready(function () {
    // 1. Tự động tạo mục lục
    var data = document.querySelectorAll("h2");
    var parent = document.getElementById('menu-right');
    
    if(data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            if(!data[i].id) { data[i].id = "section-" + i; }
            var newChild = '<a href="#' + data[i].id + '" style="color: #333; display:block; padding: 5px 0;">' + data[i].innerText + '</a>';
            if(parent) parent.insertAdjacentHTML('beforeend', newChild);
        }
    }
});

$(window).scroll(function() {
    // 2. Nút Back to top
    if ($(this).scrollTop() > 100) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$('#toTop').click(function(){
    $('html, body').animate({scrollTop : 0}, 200);
    return false;
});

function openNav() { document.getElementById("mainNav").style.display = "block"; }
function closeNav() { document.getElementById("mainNav").style.display = "none"; }
