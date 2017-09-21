(function($) {
    'use strict';

    // All JavaScript pluging initialization code here

    // WoW js init
    var wowInit = new WOW({
        boxClass: 'wow',
        animateClass: 'animated', 
        offset: 0, 
        mobile: true, 
        scrollContainer: null
    });
    wowInit.init();
    
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
    });

})(jQuery)