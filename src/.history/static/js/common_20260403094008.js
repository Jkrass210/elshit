$(function() {

    const DOC = $(document);
    // banner slider swiper

    if ($('.press_center .swiper').length > 0) {
        const swiper_press_center = new Swiper('.press_center .swiper', {
            // loop: true,
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

});