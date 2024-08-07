

$(document).ready(function () {

    // CHANGE HEADER WITH SCROLL ----------- //
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 60) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });

    // main slider
    var swiper = new Swiper(".heroscreen__slider", {
        effect: "fade",
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
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
        $('.header__mobile-menu').toggleClass('active');
        $('body').toggleClass('mob-menu');
        $(this).toggleClass('on');
    });

    $('.submenu-mobile>a').on('click', function (e) {
        e.preventDefault();
        $(this).next('.dropdown').slideToggle();
    });

    // styled selects
    if ($('select').length) {
        $('.styledselect').select2({
            placeholder: "Project Type*",
            minimumResultsForSearch: Infinity,
        });
    }
});