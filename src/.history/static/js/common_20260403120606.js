$(function() {

    const DOC = $(document);

    if ($('.press_center .swiper').length > 0) {
        const swiper_press_center = new Swiper('.press_center .swiper', {
            loop: true,
            spaceBetween: 16,
            // autoHeight: true,
            navigation: {
                nextEl: '.press_center .slider_nav__right',
                prevEl: '.press_center .slider_nav__left',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1.4,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                }
            }
        });
    }

    if ($('.contacts_info .swiper').length > 0) {
        const swiper_contacts_info = new Swiper('.contacts_info .swiper', {
            loop: true,
            spaceBetween: 16,
            grabCursor: true,
            pagination: {
                el: '.contacts_info .swiper-pagination',
                clickable: true,
            },
        });
    }
    if ($('.partners_logo .swiper').length > 0) {
        const swiper_partners_logo = new Swiper('.partners_logo .swiper', {
            loop: true,
            // freeMode: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            spaceBetween: 32,
            slidesPerView: 'auto',
            observer: true,
            observeParents: true,
            grabCursor: true,
            navigation: {
                nextEl: '.partners_logo .slider_nav__right',
                prevEl: '.partners_logo .slider_nav__left',
            },
            breakpoints: {
                1024: {
                    spaceBetween: 56,
                }
            }
        });
    }


    // header__floating hide to end scroll of page
    if ($('.header__floating').length > 0) {
        var hidden = false;
        $(window).on('scroll', function() {
            if (!hidden && $(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
                $('.header__floating').hide();
                hidden = true;
            }
        });
    }
});