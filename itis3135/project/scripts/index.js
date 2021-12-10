
/* Box slider javascript */
/* This plugin is loaded into the element with the id of "slider" */
/* The slider fades from picture to picture, set to change every 4 seconds, has a pager, and starts with a random picture every time. */
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