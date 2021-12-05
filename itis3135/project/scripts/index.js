$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        mode: 'fade',
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 600,
        slideMargin: 20,
        speed: 4000,
        randomStart: true,
        captions: false,
        pagerSelector: "#id_pager",
        pagerType: 'short'
    });
});