$('.banner-slider').slick({
    dots: false,
    slidesToShow: 1,
    infinite: true,
    nextArrow: '<i class="fas fa-caret-circle-right"></i>',
    prevArrow: '<i class="fas fa-caret-circle-left"></i>',
    draggable: true,
    autoplay: true,
});

$('.evento-slider').slick({
    dots: false,
    slidesToShow: 1,
    infinite: true,
    nextArrow: '<i class="fas fa-caret-circle-right"></i>',
    prevArrow: '<i class="fas fa-caret-circle-left"></i>',
    draggable: true,
    autoplay: true,
});

$('.patner-slider').slick({
    dots: false,
    slidesToShow: 3,
    infinite: true,
    nextArrow: '<i class="fas fa-caret-circle-right"></i>',
    prevArrow: '<i class="fas fa-caret-circle-left"></i>',
    draggable: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
    },
  ]
});



$(document).on('click', '.yamm .dropdown-menu', function (e) {
    e.stopPropagation()
});



$(function () {
    $(".options i").click(function () {
        $(".options").toggleClass("active");
    });
});

$(function () {
    $(".options .search").click(function () {
        $(".search-form").addClass("active");
    });
});

$(function () {
    $(".options .share").click(function () {
        $(".share-area").addClass("active");
    });
});

$(function () {
    $(".options .setting").click(function () {
        $(".setting-area").addClass("active");
    });
});


$(function () {
    $(".options .hide-item").click(function () {
        $(".option-area").removeClass("active");
    });
});


//var contraste = 0;
function changeFilter(contraste) {
    switch (contraste) {
        case 0:
            document.getElementById("page-top").style.filter = "grayscale(100%)";
            //contraste 0;
            break;
        case 1:
            document.getElementById("page-top").style.filter = "hue-rotate(90deg)";
            //contraste 0;
            break;
        case 2:
            document.getElementById("page-top").style.filter = "invert(200%)";
            // contraste ++;
            break;
        case 3:
            document.getElementById("page-top").style.filter = "none";
            // contraste = 0;
            break;
    }
};

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


var size = 16;
$(document).ready(function () {
    $("#btn-increase").click(function () {
        $("html").css("font-size", size + 1 + "px");
        size++;
    });
    $("#btn-decrease").click(function () {
        $("html").css("font-size", size - 1 + "px");
        size--;
    });
});



$(".header-space").height($(".main-header").outerHeight(true));
