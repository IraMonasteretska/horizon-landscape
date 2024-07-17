
$(function () {

    // main slider

    var swiper = new Swiper(".heroscreen__slider", {
        effect: "fade",
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 1600,
        },
        keyboard: {
            enabled: true,
        },
        direction: 'vertical',

        scrollbar: {
            el: ".swiper-scrollbar",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="swiper-pagination-current"> 0${current} </span>  <span class="swiper-pagination-current">0${total}</span>`;
            }
        },
    });


    // header menu
    $('.burger').on('click', function () {
        $('.header__nav').toggleClass('active');
        $('body').toggleClass('mob-menu');
        $(this).toggleClass('on');
    });
});