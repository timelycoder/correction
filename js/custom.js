$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.menu').css({
            'position': 'fixed',
            'background': 'rgba(255, 255, 255, 0.95)',
            'box-shadow': '0 0 5px #000',
            'left': '0',
            'right': '0',
            'transition': '1s',
        });
        $('.menu a').css({
            'color': '#000',
            'font-weight': '400',
        });
        $('.menu nav a').hover(function () {
            $(this).css("color", "#ed228b");
        }, function () {
            $(this).css("color", "#000");
        }
        );
        $('.menu-button').css({
            'border': '1px solid #000',
            'box-shadow': '0 0 5px #000',
            'background': 'rgb(0 0 0 / 5%)',
        });
        $('.menu-items').css({
            'background': '#000',
        });
    } else {
        $('.menu').css({
            'position': 'relative',
            'background-color': 'transparent',
            'box-shadow': 'none',
        });
        $('.menu a').css({
            'color': '#FFF'
        });
        $('.menu nav a').hover(function () {
            $(this).css("color", "#ed228b");
        }, function () {
            $(this).css("color", "#fff");
        }
        );
        $('.menu-button').css({
            'border': '1px solid #fff',
            'box-shadow': '0 0 5px #fff',
            'background': '#ffffff00',
        });
        $('.menu-items').css({
            'background': '#fff',
        });
    }
});
$('.menu-button').click(function () {
    $('.menu-button').css({
        'box-shadow': '0 0 10px #000',
    });
    $('nav').slideToggle('100');
});

var load = document.getElementById("pre");

window.addEventListener("load", function () {
    load.style.display = "none";
});
