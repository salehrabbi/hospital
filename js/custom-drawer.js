$(document).ready(function () {

    $('.drawermenu').find("ul > li > ul").parent().children("a").addClass('down');
    $('.drawermenu').find("ul > li > ul").parent().children("a").append('<i class="far fa-angle-down"></i>');
    $('.drawermenu').find("ul > li > ul").addClass('sub-menu');
    $('.drawermenu').find("ul > li > ul").parent().children("a").attr("href", "#");
    $('.drawermenu ul ul').hide();
    $('.drawermenu > ul > li > a.down').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $("a.down").removeClass('active');
        }
        $(this).toggleClass('active');;

        var $menuItem = $(this).next('.sub-menu');
        $menuItem.slideToggle("fast");
        $('.drawermenu .sub-menu').not($menuItem).slideUp("fast");
    });

});
