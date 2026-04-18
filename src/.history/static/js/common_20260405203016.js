$(function() {

    const DOC = $(document);
    const WIN = $(window);

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
    let swiper_map = null;
    if ($('.map .swiper').length > 0) {
        swiper_map = new Swiper('.map .swiper', {
            // loop: true,
            spaceBetween: 16,
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            slideToClickedSlide: true,
            scrollbar: {
                el: '.map .swiper-scrollbar',
                draggable: true,
            },
            mousewheel: {
                sensitivity: 1,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 2.6,
                },
                1440: {
                    direction: "vertical",
                    slidesPerView: 'auto',
                    spaceBetween: 12,
                    // autoHeight: true,
                }
            }
        });
    }


    // header__floating hide to end scroll of page
    if ($('.header__floating').length > 0) {
        var $block = $('.header__floating');
        var hidden = false;
        var ticking = false;

        function checkScroll() {
            var atBottom = WIN.scrollTop() + WIN.height() >= DOC.height() - 50;
            if (atBottom && !hidden) {
                $block.hide();
                hidden = true;
            } else if (!atBottom && hidden) {
                $block.show();
                hidden = false;
            }
            ticking = false;
        }

        WIN.on('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(checkScroll);
                ticking = true;
            }
        });
    }
    DOC.on('click', '.header__burger', function(e) {
        e.preventDefault();

        $('.header__menu').toggleClass('open');
    });
    DOC.on('click', '.menu-close', function(e) {
        e.preventDefault();

        $('.header__menu').removeClass('open');
    });

    DOC.on('click', '.menu-children a', function(e) {
        e.preventDefault();

        const mediaQuerySM = window.matchMedia('(max-width: 1023px)');

        if (mediaQuerySM.matches) {
            $(this).next('ul').addClass('open');
        }
    });
    DOC.on('click', '.menu-prev', function(e) {
        e.preventDefault();
        $(this).closest('ul').removeClass('open');
    });

    // lg menu
    DOC.on('click', '.lg-open-catalog', function(e) {
        e.preventDefault();
        const mediaQueryMD = window.matchMedia('(min-width: 1024px)');
        if (mediaQueryMD.matches) {
            $(this).closest('li').addClass('active').siblings().removeClass('active');
            // $(this).closest('.header__menu').removeClass('open');
            $(this).next('ul').addClass('open').find('>li.menu-children').first().addClass('active').find('a').next('ul').addClass('open'); // Открываем первый список по дефолту
        }
    });
    DOC.on('click', '.menu-children a', function(e) {
        e.preventDefault();
        const mediaQueryMD = window.matchMedia('(min-width: 1024px)');
        if (mediaQueryMD.matches) {
            $(this).closest('li').addClass('active').siblings().removeClass('active');
            $(this).next('ul').addClass('open').closest('li').siblings().find('ul').removeClass('open');
        }
    });
    DOC.on('click', '.menu-close-lg', function(e) {
        e.preventDefault();
        const mediaQueryMD = window.matchMedia('(min-width: 1024px)');
        if (mediaQueryMD.matches) {
            $(this).closest('li').removeClass('active').siblings().removeClass('active');
            $(this).closest('ul').removeClass('open');
        }
    });


    // map

    console.log('start actives_on_main_4');

    let ActivityModals = {};
    let currentMode = null;
    let resizeTimer = null;
    let originalSlidesMap = {};


    DOC.on('click', '.map__navigation_item, .activity-dir__map-area', function(e) {
        let id = $(this).attr('data-region-id');

        $('.activity-dir__map-area').removeClass('active');
        $('.activity-dir__map-area[data-region-id="' + id + '"]').addClass('active');

        $('.activity-modal-slider').removeClass('show');
        $('.activity-modal-slider').hide();
        $('.activity-modal-slider[data-id="' + id + '"]').addClass('show');
        $('.activity-modal-slider[data-id="' + id + '"]').fadeIn(300);
        $('.map__navigation_item[data-region-id="' + id + '"]').addClass('active').parent().siblings().find('.map__navigation_item').removeClass('active');
        swiper_map.slideTo($(this).attr('data-item-id'), 1);

        if ($(e.target).hasClass('map__navigation_item') || $(e.target).closest('.map__navigation_item').length > 0) {
            let itemId = $(this).attr('data-item-id');
            setTimeout(function() {

                let $activeModalSlider = $('.activity-modal-slider[data-id="' + id + '"].show');
                if ($activeModalSlider.length && ActivityModals[id]) {
                    let $targetSlide = $activeModalSlider.find('.swiper-slide[data-item-id="' + itemId + '"]');



                    if ($targetSlide.length) {
                        let targetIndex = $targetSlide.index();
                        let swiperInstance = ActivityModals[id];
                        console.log('targetIndex = ' + targetIndex);
                        swiperInstance.slideTo(targetIndex, 1);

                        let realSlidesCount = $activeModalSlider.find('.swiper-wrapper > .swiper-slide:not(.swiper-slide-duplicate)').length;
                        $activeModalSlider.find('.activity-modal-slider__counter-total').text(realSlidesCount);
                        $activeModalSlider.find('.activity-modal-slider__counter-current').text(targetIndex + 1);
                    }
                }
            }, 1);
        }

    });

    if ($('.map__navigation_item.active').length > 0) {
        let id = $('.map__navigation_item.active').attr('data-region-id');
        let itemId = $('.map__navigation_item.active').attr('data-item-id');
        let $activeModalSlider = $('.activity-modal-slider[data-id="' + id + '"].show');
        $('.activity-dir__map-area[data-region-id="' + id + '"]').addClass('active');

        swiper_map.slideTo(itemId, 1);
    }
});