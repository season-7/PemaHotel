$(document).ready(function () {
    var stickyNavTop = $('.subhead').offset().top;

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.subhead').addClass('sticky');
        } else {
            $('.subhead').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});