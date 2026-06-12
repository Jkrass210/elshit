$(function () {

    const DOC = $(document);
    const WIN = $(window);

    if ($('.press_center .swiper').length > 0) {
        const swiper_press_center = new Swiper('.press_center .swiper', {
            //loop: true,
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
    if ($('.swiper-reviews-partner.swiper').length > 0) {

        const swiperEl = document.querySelector('.swiper-reviews-partner.swiper');

        //swiperEl.classList.add('load');

        const swiper_reviews_partner = new Swiper(swiperEl, {
            init: false,
            spaceBetween: 16,
            slidesPerView: 'auto',
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.reviews-partner__box-swiper .slider_nav__right',
                prevEl: '.reviews-partner__box-swiper .slider_nav__left',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 'auto',
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                }
            },
            on: {
                init: function () {
                    swiperEl.classList.remove('load');
                }
            }
        });

        swiper_reviews_partner.init();
    }
    // Перебираем все .swiper-press_center-line.swiper на странице
    const pressCenterLineSwipers = document.querySelectorAll('.swiper-press_center-line.swiper');
    if (pressCenterLineSwipers.length > 0) {
        pressCenterLineSwipers.forEach(swiperEl => {
            //swiperEl.classList.add('load');

            const swiperInstance = new Swiper(swiperEl, {
                init: false,
                spaceBetween: 16,
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: swiperEl.querySelector('.slider_nav__right'),
                    prevEl: swiperEl.querySelector('.slider_nav__left'),
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
                },
                on: {
                    init: function () {
                        swiperEl.classList.remove('load');
                    }
                }
            });

            swiperInstance.init();
        });
    }
    const pressCenterVideoSwipers = document.querySelectorAll('.swiper-press_center-video.swiper');
    if (pressCenterVideoSwipers.length > 0) {
        pressCenterVideoSwipers.forEach(swiperEl => {
            //swiperEl.classList.add('load');

            const swiperInstance = new Swiper(swiperEl, {
                init: false,
                spaceBetween: 16,
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: swiperEl.querySelector('.slider_nav__right'),
                    prevEl: swiperEl.querySelector('.slider_nav__left'),
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    1023: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    }
                },
                on: {
                    init: function () {
                        swiperEl.classList.remove('load');
                    }
                }
            });

            swiperInstance.init();
        });
    }
    const detailNewsSwipers = document.querySelectorAll('.swiper-detail-news.swiper');
    if (detailNewsSwipers.length > 0) {
        detailNewsSwipers.forEach(swiperEl => {
            const swiperInstance = new Swiper(swiperEl, {
                init: false,
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                speed: 600,
                observer: true,
                observeParents: true,
                pagination: {
                    el: swiperEl.querySelector('.swiper-type-1-pagination'),
                    clickable: true,
                },
                on: {
                    init: function () {
                        swiperEl.classList.remove('load');
                    }
                }
            });

            swiperInstance.init();
        });
    }
    if ($('.swiper-reviews-customers.swiper').length > 0) {
        const swiperEl = document.querySelector('.swiper-reviews-customers.swiper');

        const swiper_reviews_customers = new Swiper(swiperEl, {
            init: false,
            spaceBetween: 16,
            slidesPerView: 1,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            observer: true,
            observeParents: true,
            allowTouchMove: false,
            simulateTouch: false,
            navigation: {
                nextEl: '.reviews-customers__box-swiper .slider_nav__right',
                prevEl: '.reviews-customers__box-swiper .slider_nav__left',
            },
            breakpoints: {
                /*1024: {
                    slidesPerView: 'auto',
                    spaceBetween: 24,
                },*/
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                }
            },
            on: {
                init: function () {
                    swiperEl.classList.remove('load');
                }
            }
        });

        swiper_reviews_customers.init();
    }
    if ($('.swiper-card-reviews-customers.swiper').length > 0) {
        const sliders = document.querySelectorAll('.swiper-card-reviews-customers.swiper');

        sliders.forEach(swiperEl => {
            const swiperInstance = new Swiper(swiperEl, {
                init: false,
                grabCursor: true,
                spaceBetween: 12,
                slidesPerView: 'auto',
                observer: true,
                observeParents: true,
                breakpoints: {
                    1024: {
                        slidesPerView: 'auto',
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    }
                },
                on: {
                    init: function () {
                        swiperEl.classList.remove('load');
                    }
                }
            });

            swiperInstance.init();
        });
    }
    if ($('.swiper-detail-product.swiper').length > 0) {
        const sliders = document.querySelectorAll('.swiper-detail-product.swiper');

        sliders.forEach(swiperEl => {
            const swiperInstance = new Swiper(swiperEl, {
                init: false,
                spaceBetween: 0,
                slidesPerView: '1',
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                speed: 600,
                observer: true,
                observeParents: true,
                pagination: {
                    el: '.swiper-detail-product .swiper-pagination',
                    clickable: true,
                },
                on: {
                    init: function () {
                        swiperEl.classList.remove('load');
                    }
                }
            });

            swiperInstance.init();
        });
    }
    if ($('.swiper-unique-decisions.swiper').length > 0) {
        const sliders = document.querySelectorAll('.swiper-unique-decisions.swiper');

        sliders.forEach(swiperEl => {
            const swiperInstance = new Swiper(swiperEl, {
                init: false,
                spaceBetween: 0,
                slidesPerView: '1',
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                speed: 600,
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: '.swiper-unique-decisions-nav .link-pagination.--next',
                    prevEl: '.swiper-unique-decisions-nav .link-pagination.--prev',
                },
                pagination: {
                    el: '.swiper-unique-decisions-pagination',
                    clickable: true,
                },
               on: {
                    init: function () {
                        swiperEl.classList.remove('load');
                    }
                }
            });

            swiperInstance.init();
        });
    }
    if ($('.swiper-btn-gallery.swiper').length > 0) {
        const sliders = document.querySelectorAll('.swiper-btn-gallery.swiper');

        sliders.forEach(swiperEl => {
            const swiperInstance = new Swiper(swiperEl, {
                init: false,
                spaceBetween: 8,
                slidesPerView: 'auto',
                observer: true,
                observeParents: true,
                breakpoints: {
                    1024: {
                        spaceBetween: 12,
                    },
                    1200: {
                        spaceBetween: 8,
                    }
                },
                /* speed: 600, */
                /* navigation: {
                    nextEl: '.swiper-unique-decisions-nav .link-pagination.--next',
                    prevEl: '.swiper-unique-decisions-nav .link-pagination.--prev',
                },
                pagination: {
                    el: '.swiper-unique-decisions-pagination',
                    clickable: true,
                }, */
               on: {
                    init: function () {
                        swiperEl.classList.remove('load');
                    }
                }
            });

            swiperInstance.init();
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

        WIN.on('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(checkScroll);
                ticking = true;
            }
        });
    }
    DOC.on('click', '.header__burger', function (e) {
        e.preventDefault();

        $('.header__menu').toggleClass('open');
    });
    DOC.on('click', '.menu-close', function (e) {
        e.preventDefault();

        $('.header__menu').removeClass('open');
    });

    DOC.on('click', '.menu-children a', function (e) {


        const mediaQuerySM = window.matchMedia('(max-width: 1023px)');

        if (mediaQuerySM.matches) {
            e.preventDefault();
            $(this).next('ul').addClass('open');
        }
    });
    DOC.on('click', '.menu-prev', function (e) {
        e.preventDefault();
        $(this).closest('ul').removeClass('open');
    });

    // lg menu
    DOC.on('click', '.lg-open-catalog', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const mediaQueryMD = window.matchMedia('(min-width: 1024px) and (max-width: 1439px)');
        const mediaQueryLG = window.matchMedia('(min-width: 1440px)');

        if (mediaQueryMD.matches) {
            $(this).closest('.menu-main').toggleClass('active');
            $(this).closest('li').addClass('active').siblings().removeClass('active');
            $(this).next('ul').addClass('open').find('>li.menu-children').first().addClass('active').find('a').next('ul').addClass('open'); // Открываем первый список по дефолту

            if ($(this).next('ul').find('>li.menu-children').first().find('a').next('ul').length > 0) {
                let menuOpenHeight = $(this).next('ul').find('>li.menu-children').first().find('a').next('ul').outerHeight();
                $(this).next('ul').css('height', menuOpenHeight + 'px');

                WIN.on('resize', function () {
                    if ($(this).next('ul').find('>li.menu-children').first().find('a').next('ul').length > 0) {
                        let menuOpenHeight = $(this).next('ul').find('>li.menu-children').first().find('a').next('ul').outerHeight();
                        $(this).next('ul').css('height', menuOpenHeight + 'px');
                    }
                });
            }
        }
        if (mediaQueryLG.matches) {
            $(this).closest('.menu-main').toggleClass('active');
            $(this).closest('li').toggleClass('active').siblings().removeClass('active');
            $(this).next('ul').toggleClass('open').find('>li.menu-children').first().toggleClass('active').find('a').next('ul').toggleClass('open'); // Открываем первый список по дефолту

            if ($(this).next('ul').find('>li.menu-children').first().find('a').next('ul').length > 0) {
                let menuOpenHeight = $(this).next('ul').find('>li.menu-children').first().find('a').next('ul').outerHeight();
                $(this).next('ul').css('height', menuOpenHeight + 'px');
            }

            WIN.on('resize', function () {
                if ($(this).next('ul').find('>li.menu-children').first().find('a').next('ul').length > 0) {
                    let menuOpenHeight = $(this).next('ul').find('>li.menu-children').first().find('a').next('ul').outerHeight();
                    $(this).next('ul').css('height', menuOpenHeight + 'px');
                }
            });
        }
    });
    DOC.on('click', '.menu-children a', function (e) {

        const mediaQueryMD = window.matchMedia('(min-width: 1024px) and (max-width: 1439px)');
        // const mediaQueryLG = window.matchMedia('(min-width: 1440px)');
        if (mediaQueryMD.matches) {

            e.preventDefault();
            $(this).closest('li').addClass('active').siblings().removeClass('active');
            $(this).next('ul').addClass('open').closest('li').siblings().find('ul').removeClass('open');
        }
    });
    DOC.on('click', '.menu-children .menu-children > a', function (e) {

        const mediaQueryLG = window.matchMedia('(min-width: 1440px)');
        if (mediaQueryLG.matches) {
            if (!$(this).closest('li.menu-children').last().hasClass('menu-default')) {
                e.preventDefault();
                $(this).closest('li').addClass('active').siblings().removeClass('active');
                $(this).next('ul').addClass('open').closest('li').siblings().find('ul').removeClass('open');
            }

        }
    });
    DOC.on('click', '.menu-close-lg', function (e) {
        e.preventDefault();
        const mediaQueryMD = window.matchMedia('(min-width: 1024px)');
        if (mediaQueryMD.matches) {
            $(this).closest('.menu-main').removeClass('active');
            $(this).closest('li').removeClass('active').siblings().removeClass('active');
            $(this).closest('ul').removeClass('open');
            $(this).closest('.header__menu').removeClass('open');
        }
    });

    DOC.on('click', '.accordion_sect__header', function (e) {
        e.preventDefault();
        $(this).closest('.accordion_sect').find('.accordion_sect__content').slideToggle(300).closest('.accordion_sect').siblings().find('.accordion_sect__content').slideUp(300);
        $(this).find('.i-arrow').toggleClass('active').closest('.accordion_sect').siblings().find('.i-arrow').removeClass('active');
    });

    //form validation

    function resetForm($form) {

        if (!$form || !$form.length || !$form[0] || typeof $form[0].reset !== 'function') {
            console.warn('resetForm: передан неверный элемент формы', $form);
            return;
        }

        $form[0].reset();
        $form.removeClass('error');
        $form.find('.field-message').remove();
        $form.find('.filed_checkbox').removeClass('error').find('.field-message').remove();
        $form.find('.filed_checkbox').find('input').prop('checked', false).find('.check').removeClass('error').find('.field-message').remove();
        $form.find('input[type="file"]').val('').prop('disabled', false);
    }

    $('.field_upload').each(function () {
        const $fieldUpload = $(this);
        const $fileInput = $fieldUpload.find('input[type="file"]');
        const $closeBtn = $fieldUpload.find('.field_upload__close');

        $fileInput.on('change', function () {
            const file = this.files[0]; // this — DOM-элемент
            if (!file) return;
            $fieldUpload.addClass('show').find('.field_upload__name').text(file.name);
        });

        $closeBtn.off('click').on('click', function () {
            $fieldUpload.removeClass('show').find('.field_upload__name').text('');
            $fileInput.val(''); // сброс — разрешён, т.к. пустая строка
            $fieldUpload.removeClass('error').find('.field-message').remove();
        });
    });

    function showModalSuccess() {
        if ($('.modal[data-modal-label="modal_success"]').length > 0) {
            $('.modal[data-modal-label="modal_success"]').fadeIn(300);
        } else {
            $('.modal[data-modal-label="modal_success"]').remove();
            $('<div class="modal" data-modal-label="modal_success"><div class="modal__bg"></div><div class="modal__wrap"><div class="modal__title">Ваше сообщение отправлено</div><div class="modal__content">Мы уже получили ваше сообщение. Наши специалисты в ближайшее время свяжутся с вами для уточнения всех деталей запроса.</div><button type="button" class="btn_green js-close-modal">Закрыть</button></div></div>').appendTo('body');
            $('.modal[data-modal-label="modal_success"]').fadeIn(300);
        }
    }

    function clearVideoIframe($modal) {
        const $iframe = $modal.find('.js-box-video-iframe iframe');
        if ($iframe.length) {
            $iframe.attr('src', '');
        }
    }

    function clearViewerImg($modal) {
        const $img = $modal.find('.js-box-img img');
        if ($img.length) {
            $img.attr('src', '');
        }
    }

    function closeModal(modal) {
        clearVideoIframe(modal);
        clearViewerImg(modal);
        modal.fadeOut(300, function () {
            resetForm(modal.find('form'));
        });
    }

    DOC.on('click', '.modal__close', function (e) {
        e.preventDefault();
        closeModal($(this).closest('.modal'));
    });
    DOC.on('click', '.modal__col2__close', function (e) {
        e.preventDefault();
        closeModal($(this).closest('.modal'));
    });
    // modal close outside click
    DOC.on('click', '.modal', function (e) {
        if (!$(e.target).closest('.modal__wrap').length) {
            closeModal($(this));
        }
    });

    /*$('.mask-phone').inputmask({
        mask: '+7 (999) 999-99-99',
        // placeholder: '+7 (999) 999-99-99',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        showMaskOnEmpty: false,
    });*/

    /*const $form = $('.modal__form');*/

    // При отправке формы
    /*$form.on('submit', function (e) {
        e.preventDefault();
        const valid = validateForm($(this), {
            phoneMessage: 'Укажите полный номер в формате +7 (XXX) XXX-XX-XX',
            defaultMessage: 'Это поле не может быть пустым',
            // checkboxMessage: 'Поставьте галочку, чтобы продолжить'
        });
        if (valid) {
            console.log('Валидация пройдена, отправляем');
            // $(this)[0].submit();
            closeModal($(this).closest('.modal'));
            showModalSuccess();
        } else {
            console.log('Ошибки в форме');
        }
    });*/

    // Валидация при потере фокуса
    /*$form.on('blur', 'input, textarea', function () {
        validateForm($form);
    });*/

    // Для чекбокса – по изменению
    /*$form.on('change', '.filed_checkbox input', function () {
        validateForm($form);
    });*/

    let $modalOrder = $('.modal__order');

    $modalOrder.responsiveDom({
        appendTo: '.modal__wrap.col2',
        mediaQuery: '(min-width: 1024px)'
    });

    DOC.on('click', '.js-open-modal', function (e) {
        e.preventDefault();
        const modalLabel = $(this).attr('data-modal-label');
        $('.modal[data-modal-label="' + modalLabel + '"]').fadeIn(300);
    });

    DOC.on('click', '.js-open-video-iframe', function () {
        const videoSrc = $(this).attr('data-iframe-video');
        const modalLabel = $(this).attr('data-modal-label');

        if (!videoSrc || !modalLabel) return;

        const $modal = $('.modal[data-modal-label="' + modalLabel + '"]');
        const $iframe = $modal.find('.js-box-video-iframe iframe');

        if (!$iframe.length) return;

        $iframe.attr('src', videoSrc);
    });

    DOC.on('click', '.js-open-img-modal', function () {
        const imgSrc = $(this).attr('data-img');
        const modalLabel = $(this).attr('data-modal-label');

        if (!imgSrc || !modalLabel) return;

        const $modal = $('.modal[data-modal-label="' + modalLabel + '"]');
        const $img = $modal.find('.js-box-img img');

        if (!$img.length) return;

        $img.attr('src', imgSrc);
    });

    DOC.on('keydown', function (e) {
        if (e.key !== 'Escape') return;

        $('.modal:visible').each(function () {
            const $modal = $(this);
            if ($modal.find('.js-box-video-iframe').length || $modal.find('.js-box-img').length) {
                closeModal($modal);
            }
        });
    });


    // map

    console.log('start actives_on_main_4');

    let ActivityModals = {};
    // let currentMode = null;
    // let resizeTimer = null;
    // let originalSlidesMap = {};


    DOC.on('click', '.map__navigation_item, .activity-dir__map-area', function (e) {
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
            setTimeout(function () {

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
    /* создаем слайдер в модалке*/
    (function () {
        const galleries = document.querySelectorAll('.js-box-gallery');
        if (!galleries.length) return;

        galleries.forEach(function (gallery) {
            const triggers = gallery.querySelectorAll('.js-trigger-gallery');
            if (!triggers.length) return;

            let modal = null;
            let swiper = null;
            let currentIndex = 0;

            triggers.forEach(function (trigger, index) {
                trigger.addEventListener('click', function (e) {
                    e.preventDefault();

                    currentIndex = index;

                    // --- CREATE MODAL (ONCE) ---
                    if (!modal) {
                        modal = createModal(gallery);
                        document.body.appendChild(modal);

                        const swiperEl = modal.querySelector('.swiper');
                        const prevBtn = modal.querySelector('.slider_nav__left');
                        const nextBtn = modal.querySelector('.slider_nav__right');

                        if (!swiperEl) return;

                        swiper = new Swiper(swiperEl, {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            speed: 600,

                            //effect: 'fade',
                            /*fadeEffect: {
                                crossFade: true
                            },*/
                            navigation: {
                                prevEl: prevBtn,
                                nextEl: nextBtn,
                            },
                            observer: true,
                            observeParents: true,
                        });

                        function closeModal() {
                            modal.classList.remove('active');
                        }

                        // --- CLOSE CLICK ---
                        modal.addEventListener('click', function (e) {
                            const target = e.target;

                            if (
                                target.classList.contains('modal-gallery') ||
                                target.classList.contains('modal-gallery-close')
                            ) {
                                closeModal();
                            }
                        });

                        // --- ESC CLOSE ---
                        document.addEventListener('keydown', function (e) {
                            if (e.key === 'Escape' && modal.classList.contains('active')) {
                                closeModal();
                            }
                        });
                    }

                    // --- OPEN ---
                    modal.classList.add('active');

                    // --- GO TO SLIDE ---
                    requestAnimationFrame(function () {
                        swiper.update();
                        swiper.slideTo(currentIndex, 0);
                    });
                });
            });
        });

        // =======================
        // CREATE MODAL
        // =======================
        function createModal(sourceGallery) {
            const modal = document.createElement('div');
            modal.className = 'modal-gallery';

            const content = document.createElement('div');
            content.className = 'modal-gallery__content';

            const closeBtn = document.createElement('button');
            closeBtn.className = 'modal-gallery__close modal-gallery-close';
            closeBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M6.65039 6.65L0.650391 0.650002M6.65039 6.65L12.6504 12.65M6.65039 6.65L12.6504 0.650002M6.65039 6.65L0.650391 12.65" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;

            // --- CLONE ---
            const clone = sourceGallery.cloneNode(true);

            clone.classList.remove('js-box-gallery');

            clone.querySelectorAll('.js-trigger-gallery').forEach(function (el) {
                el.classList.remove('js-trigger-gallery');
            });

            content.appendChild(closeBtn);
            content.appendChild(clone);
            modal.appendChild(content);

            return modal;
        }
    })();
    /* создаем слайдер в модалке*/
    /* проверка на высоту блока с текстом в отзывах и создание кнопки читать все*/
    (function () {
        const boxes = document.querySelectorAll('.js-box-control');

        if (!boxes.length) return;

        const getLimit = () => {
            const w = window.innerWidth;
            if (w >= 1200) return 276;
            if (w >= 991) return 154;
            return 546;
        };

        const init = () => {
            const limit = getLimit();

            boxes.forEach(box => {
                const text = box.querySelector('.js-control-text');
                if (!text) return;

                // удаляем старую кнопку если есть
                const existingBtn = box.querySelector('.btn-read');
                if (existingBtn) existingBtn.remove();

                text.classList.remove('text-hide');

                const height = text.scrollHeight;

                if (height >= limit) {
                    text.classList.add('text-hide');

                    const btn = document.createElement('a');
                    btn.className = 'btn-read js-trigger-gallery-reviews';
                    btn.textContent = 'Читать полностью';

                    /*btn.addEventListener('click', () => {
                        text.classList.toggle('hide');
                        btn.textContent = text.classList.contains('hide')
                            ? 'Читать далее'
                            : 'Скрыть';
                    });*/

                    box.appendChild(btn);
                }
            });
        };

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(init, 150);
        });

        init();
    })();
    /* проверка на высоту блока с текстом в отзывах и создание кнопки читать все*/
    /* создаем слайдер в модалке для отзывов */
    (function () {
        let modal = null;
        let mainSwiper = null;
        let innerSwipers = [];

        // =========================
        // GLOBAL CLICK (DELEGATION)
        // =========================
        document.addEventListener('pointerdown', function (e) {
            const trigger = e.target.closest('.js-trigger-gallery-reviews');
            if (!trigger) return;

            e.stopPropagation(); // важно: capture phase уже включён через true ниже
        }, true);

        document.addEventListener('click', function (e) {
            const trigger = e.target.closest('.js-trigger-gallery-reviews');
            if (!trigger) return;

            e.preventDefault();

            const gallery = trigger.closest('.js-box-gallery-reviews');
            if (!gallery) return;

            const mainEl = gallery.querySelector('.swiper-reviews-customers.swiper');
            if (!mainEl || !mainEl.swiper) return;

            const swiper = mainEl.swiper;

            const slideEl = trigger.closest('.swiper-slide');
            const currentIndex = swiper.slides.indexOf(slideEl);

            openModal(gallery, currentIndex);
        });

        // =========================
        // OPEN MODAL
        // =========================
        function openModal(sourceGallery, index) {
            destroyModal();

            modal = createModal(sourceGallery);
            document.body.appendChild(modal);

            const mainEl = modal.querySelector('.swiper-reviews-customers.swiper');

            mainSwiper = new Swiper(mainEl, {
                slidesPerView: 1,
                spaceBetween: 16,
                speed: 600,
                autoHeight: true,

                navigation: {
                    nextEl: modal.querySelector('.slider_nav__right'),
                    prevEl: modal.querySelector('.slider_nav__left'),
                },

                observer: true,
                observeParents: true,

                simulateTouch: false,
                allowTouchMove: false,
                simulateTouch: false,
            });

            // inner swipers
            modal.querySelectorAll('.swiper-card-reviews-customers.swiper').forEach(el => {
                const instance = new Swiper(el, {
                    grabCursor: true,
                    slidesPerView: 'auto',
                    spaceBetween: 12,
                    speed: 500,
                    observer: true,
                    observeParents: true,
                    breakpoints: {
                        1024: {
                            slidesPerView: 'auto',
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 16,
                        }
                    },
                    //simulateTouch: false,
                });

                innerSwipers.push(instance);
            });

            modal.classList.add('active');

            requestAnimationFrame(() => {
                mainSwiper.update();
                innerSwipers.forEach(sw => sw.update());

                if (index >= 0) {
                    mainSwiper.slideTo(index, 0);
                }
            });
        }

        // =========================
        // DESTROY MODAL
        // =========================
        function destroyModal() {
            if (mainSwiper) {
                mainSwiper.destroy(true, true);
                mainSwiper = null;
            }

            innerSwipers.forEach(sw => sw.destroy(true, true));
            innerSwipers = [];

            if (modal) {
                modal.remove();
                modal = null;
            }
        }

        // =========================
        // CREATE MODAL
        // =========================
        function createModal(sourceGallery) {
            const modal = document.createElement('div');
            modal.className = 'modal-gallery reviews';

            const content = document.createElement('div');
            content.className = 'modal-gallery__content';

            const closeBtn = document.createElement('button');
            closeBtn.className = 'modal-gallery__close modal-gallery-close';
            closeBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M6.65039 6.65L0.650391 0.650002M6.65039 6.65L12.6504 12.65M6.65039 6.65L12.6504 0.650002M6.65039 6.65L0.650391 12.65" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;

            const clone = sourceGallery.cloneNode(true);

            // cleanup
            clone.classList.remove('js-box-gallery-reviews');

            clone.querySelectorAll('.js-trigger-gallery-reviews').forEach(el => el.remove());
            clone.querySelectorAll('.text-hide').forEach(el => el.classList.remove('text-hide'));

            content.appendChild(closeBtn);
            content.appendChild(clone);
            modal.appendChild(content);

            // CLOSE HANDLERS
            modal.addEventListener('click', function (e) {
                if (
                    e.target.classList.contains('modal-gallery') ||
                    e.target.classList.contains('modal-gallery-close')
                ) {
                    destroyModal();
                }
            });

            document.addEventListener('keydown', function escHandler(e) {
                if (e.key === 'Escape') {
                    destroyModal();
                    document.removeEventListener('keydown', escHandler);
                }
            });

            return modal;
        }
    })();
    /* создаем слайдер в модалке для отзывов */
    /* валидация форм */
    (function () {
        console.log('Form validation module loaded');

        const $ = window.jQuery;
        if (!$) return;

        $('.js-phone-mask').inputmask('+7 999 999-99-99');

        const doc = $(document);

        // =========================
        // ФАЙЛЫ
        // =========================
        /*doc.on('change', '.js-file', function () {
            const input = this;
            const $input = $(this);
            const $parent = $input.closest('.input-file');

            const allowedExtensions = ['pdf', 'jpeg', 'png'];
            const maxSize = 5 * 1024 * 1024;

            const newFiles = Array.from(input.files);
            if (!newFiles.length) return;

            const existingFiles = input._files || [];

            let dt = new DataTransfer();
            let hasError = false;

            const allFiles = [...existingFiles, ...newFiles];

            allFiles.forEach(file => {
                const extension = file.name.split('.').pop().toLowerCase();

                if (!allowedExtensions.includes(extension)) {
                    hasError = true;
                    return;
                }

                if (file.size > maxSize) {
                    hasError = true;
                    return;
                }

                dt.items.add(file);
            });

            if (hasError || dt.files.length === 0) {
                $input.addClass('error');
                input.value = '';
                return;
            }

            $input.removeClass('error');

            input.files = dt.files;
            input._files = Array.from(dt.files);

            renderFileList($parent, input);
        });*/

        doc.on('change', '.js-file', function () {
            const input = this;
            const $input = $(this);
            const $parent = $input.closest('.input-file');

            const isImg = $input.hasClass('js-file-img');
            const isDoc = $input.hasClass('js-file-doc');

            let allowedExtensions = [];

            if (isImg) {
                allowedExtensions = ['pdf', 'jpeg', 'png'];
            } else if (isDoc) {
                allowedExtensions = ['pdf', 'doc', 'docx'];
            }

            const maxSize = 5 * 1024 * 1024;

            const newFiles = Array.from(input.files);
            if (!newFiles.length) return;

            const existingFiles = input._files || [];

            let dt = new DataTransfer();
            let hasError = false;

            const allFiles = [...existingFiles, ...newFiles];

            allFiles.forEach(file => {
                const extension = file.name.split('.').pop().toLowerCase();

                if (!allowedExtensions.includes(extension)) {
                    hasError = true;
                    return;
                }

                if (file.size > maxSize) {
                    hasError = true;
                    return;
                }

                dt.items.add(file);
            });

            if (hasError || dt.files.length === 0) {
                $input.addClass('error');
                input.value = '';
                return;
            }

            $input.removeClass('error');

            input.files = dt.files;
            input._files = Array.from(dt.files);

            renderFileList($parent, input);
        });


        function renderFileList($parent, input) {
            $parent.find('.input-file__files').remove();

            const files = Array.from(input.files);
            if (!files.length) return;

            const $filesBlock = $('<div class="input-file__files"></div>');

            files.forEach((file, index) => {
                const $fileItem = $(`
                    <div class="input-file__item" data-index="${index}">
                        <span class="input-file__name">${file.name}</span>
                        <button type="button" class="input-file__remove">✕</button>
                    </div>
                `);

                $filesBlock.append($fileItem);
            });

            $parent.find('.input-file__wrapp').after($filesBlock);
        }

        doc.on('click', '.input-file__remove', function () {
            const $item = $(this).closest('.input-file__item');
            const indexToRemove = $item.data('index');

            const $parent = $(this).closest('.input-file');
            const input = $parent.find('.js-file')[0];

            let dt = new DataTransfer();
            let files = input._files || [];

            files.forEach((file, index) => {
                if (index !== indexToRemove) {
                    dt.items.add(file);
                }
            });

            input.files = dt.files;
            input._files = Array.from(dt.files);

            renderFileList($parent, input);
        });

        // =========================
        // ВАЛИДАЦИЯ
        // =========================
        doc.on('submit', '.js-form', function (e) {
            let errors = 0;
            let form = $(this);
            let requireds = form.find('.required');

            requireds.removeClass('error');

            requireds.each(function (_, input) {
                let $input = $(input);
                let val = $input.val();
                let type = input.type;

                if (type === 'checkbox' && $input.hasClass('required-checkbox')) {
                    if (!input.checked) {
                        $input.addClass('error');
                        errors++;
                    }
                    return;
                }

                if (type === 'radio' && $input.hasClass('required-radio')) {
                    let name = input.name;
                    let isChecked = form.find(`input[name="${name}"]:checked`).length > 0;

                    if (!isChecked) {
                        form.find(`input[name="${name}"]`).addClass('error');
                        errors++;
                    }
                    return;
                }

                if (!val || val.length === 0) {
                    $input.addClass('error');
                    errors++;
                }

                if ($input.hasClass('required-phone')) {
                    let phone = val.replace(/\D+/g, "");
                    if (phone.length < 11) {
                        $input.addClass('error');
                        errors++;
                    }
                }

                if ($input.hasClass('required-mail')) {
                    let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailReg.test(val)) {
                        $input.addClass('error');
                        errors++;
                    }
                }

                if ($input.hasClass('required-evaluation')) {
                    if (!/^[1-5]$/.test(val)) {
                        $input.addClass('error');
                        errors++;
                    }
                }
            });

            if (errors > 0) {
                e.preventDefault();
                e.stopImmediatePropagation(); // блокируем любые AJAX-хендлеры не знаю нужно или нет???

                if (typeof BX !== 'undefined') {
                    BX.closeWait();
                }
                return;
            }


            console.log('Валидация пройдена, отправляем');
            // $(this)[0].submit();
            closeModal($(this).closest('.modal'));
            showModalSuccess();

            // =========================
            // УСПЕХ (UI переключение)
            // =========================

        });

        // =========================
        // UX
        // =========================
        doc.on('change', '.required-checkbox', function () {
            if (this.checked) $(this).removeClass('error');
        });

        doc.on('focus', '.required', function () {
            $(this).removeClass('error');
        });

        doc.on('input', '.required', function () {
            $(this).removeClass('error');
        });

        doc.on('change', '.required-radio', function () {
            let name = this.name;
            $(`input[name="${name}"]`).removeClass('error');
        });

    })();
    /* валидация форм */
    /* табы первого типа */
    (function initTabs1() {
        const TAB_GROUPS = [
            {
                root: '.js-tabs-1',
                btn: '.js-tabs-1-btn',
                box: '.js-tabs-1-box',
            },
            {
                root: '.js-tabs-1-map',
                btn: '.js-tabs-1-btn-map',
                box: '.js-tabs-1-box-map',
            },
        ];

        function initTabGroup({ root, btn, box }) {
            const tabs = document.querySelectorAll(root);
            if (!tabs.length) return;

            tabs.forEach(tab => {
                const btns = tab.querySelectorAll(btn);
                const boxes = tab.querySelectorAll(box);

                if (!btns.length || !boxes.length) return;
                if (btns.length !== boxes.length) return;

                const clearActive = () => {
                    btns.forEach(item => item.classList.remove('active'));
                    boxes.forEach(item => item.classList.remove('active'));
                };

                btns.forEach((button, index) => {
                    button.addEventListener('click', () => {
                        clearActive();
                        button.classList.add('active');
                        boxes[index].classList.add('active');
                    });
                });

                clearActive();
                btns[0].classList.add('active');
                boxes[0].classList.add('active');
            });
        }

        TAB_GROUPS.forEach(initTabGroup);
    })();
    /* табы первого типа */
    /* табы второго типа */
    (function initTabs2() {
        const containers = document.querySelectorAll(".js-tabs-type-2");

        // Проверяем наличие контейнеров
        if (containers.length === 0) {
            console.warn(`Контейнеры с селектором "${".js-tabs-type-2-tab"}" не найдены`);
            return;
        }

        containers.forEach(container => {
            const tabs = container.querySelectorAll(".js-tabs-type-2-tab");
            const buttons = container.querySelectorAll(".js-tabs-type-2-btn");
            const contents = container.querySelectorAll(".js-tabs-type-2-info");

            // Проверяем наличие всех элементов внутри контейнера
            if (tabs.length === 0 || buttons.length === 0 || contents.length === 0) {
            console.warn('Не все необходимые элементы найдены в контейнере');
            return;
            }

            // Функция закрытия всех табов
            function closeAllTabs() {
            buttons.forEach(button => button.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
            }

            // Функция открытия таба
            function openTab(button, content) {
            closeAllTabs();
            button.classList.add('active');
            content.classList.add('active');
            }

            // Обработчики клика на кнопки
            buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const content = contents[index];
                const isActive = button.classList.contains('active');

                if (isActive) {
                closeAllTabs();
                } else {
                openTab(button, content);
                }
            });
            });

            // Обработчик клавиши Esc
            document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeAllTabs();
            }
            });
        });
                
    })();
    /* табы второго типа */
    /* дропдаун 1 типа */
    (function () {
        function initDropDown1(options) {
          const settings = Object.assign(
            {
              rootSelector: '.drop-down-1',
              btnSelector: '.drop-down-1__btn',
              boxSelector: '.drop-down-1__box',
              activeClass: 'active',
            },
            options || {}
          );
      
          const dropdowns = document.querySelectorAll(settings.rootSelector);
      
          if (!dropdowns.length) return;
      
          function closeAll() {
            dropdowns.forEach(function (dropdown) {
              const button = dropdown.querySelector(settings.btnSelector);
              const box = dropdown.querySelector(settings.boxSelector);
      
              if (button) {
                button.classList.remove(settings.activeClass);
              }
      
              if (box) {
                box.classList.remove(settings.activeClass);
              }
            });
          }
      
          dropdowns.forEach(function (dropdown) {
            const button = dropdown.querySelector(settings.btnSelector);
            const box = dropdown.querySelector(settings.boxSelector);
      
            if (!button || !box) return;
      
            const closeBtn = box.querySelector('.js-close');
      
            function close() {
              button.classList.remove(settings.activeClass);
              box.classList.remove(settings.activeClass);
      
              document.removeEventListener('click', onOutsideClick);
              document.removeEventListener('keydown', onEsc);
            }
      
            function open() {
              closeAll();
      
              button.classList.add(settings.activeClass);
              box.classList.add(settings.activeClass);
      
              document.addEventListener('click', onOutsideClick);
              document.addEventListener('keydown', onEsc);
            }
      
            function onOutsideClick(e) {
              if (!dropdown.contains(e.target)) {
                close();
              }
            }
      
            function onEsc(e) {
              if (e.key === 'Escape') {
                close();
              }
            }
      
            if (closeBtn) {
              closeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                close();
              });
            }
      
            button.addEventListener('click', function (e) {
              e.preventDefault();
      
              if (button.classList.contains(settings.activeClass)) {
                close();
              } else {
                open();
              }
            });
          });
        }
      
        initDropDown1();
      })();
    /* дропдаун 1 типа */
    /* скролл элемента */
    (function ($) {
        $(document).ready(function () {
            $('.js-scroll-bg').each(function () {
                var $el = $(this);

                function checkScroll() {
                    // Проверяем, есть ли скролл
                    if ($el[0].scrollHeight <= $el[0].clientHeight) {
                        // Контента мало, скролл не используется, удаляем классы
                        $el.removeClass('start-scroll end-scroll');
                        return;
                    }

                    // Проверяем позицию скролла
                    if ($el.scrollTop() <= 1) {  // Маленький tolerance для top
                        $el.addClass('start-scroll');
                    } else {
                        $el.removeClass('start-scroll');
                    }

                    // Для bottom используем tolerance из-за возможных округлений
                    if ($el.scrollTop() + $el[0].clientHeight >= $el[0].scrollHeight - 1) {
                        $el.addClass('end-scroll');
                    } else {
                        $el.removeClass('end-scroll');
                    }
                }

                // Навешиваем обработчик скролла
                $el.on('scroll', checkScroll);

                // MutationObserver для отслеживания изменений в дочерних элементах (например, display: none -> block)
                var observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        if (mutation.type === 'attributes' && (mutation.attributeName === 'style' || mutation.attributeName === 'class')) {
                            checkScroll();
                        }
                    });
                });

                observer.observe($el[0], {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['style', 'class']
                });

                // Первоначальная проверка
                checkScroll();
            });
        });
    })(jQuery);
    /* скролл элемента */
    /* подключаем карту */
    (function () {
        if (!document.getElementById('box-contacts-map')) return;

        ymaps.ready(init);
        function init() {
            const isMobile = window.innerWidth <= 1000;
            const center = isMobile
                ? [54.390467, 35.740147] // центр для мобилки
                : [54.390467, 35.740147]; // центр для десктопа
            const iconSize = isMobile
                ? [33, 43] // меньше иконка
                : [37, 48];
            const iconOffset = isMobile
                ? [-15, -40]
                : [-10, -20];
            const map = new ymaps.Map("box-contacts-map", {
                center: center,
                zoom: 13,
                controls: []
            });
            map.behaviors.disable('scrollZoom');
            const placemark = new ymaps.Placemark(
                [54.390467, 35.740147],
                {
                    hintContent: "Моя метка",
                    balloonContent: "Описание"
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/local/icon.svg',
                    iconImageSize: iconSize,
                    iconImageOffset: iconOffset
                }
            );
            map.geoObjects.add(placemark);
        }
    })();

    (function () {
        if (!document.getElementById('box-contacts-map-2')) return;

        ymaps.ready(init);

        function init() {
            const isMobile = window.innerWidth <= 1000;
            const iconSize = isMobile ? [33, 43] : [37, 48];
            const iconOffset = isMobile ? [-15, -40] : [-10, -20];

            // Координаты двух точек
            const coords1 = [54.390467, 35.740147]; // существующий адрес
            const coords2 = [53.892224, 27.504312]; // второй адрес

            // Создаем карту с временным центром и зумом
            const map = new ymaps.Map("box-contacts-map-2", {
                center: coords1,
                zoom: 5, // поставим небольшой зум, сразу потом заменим fitToBounds
                controls: []
            });
            map.behaviors.disable('scrollZoom');

            // Первый маркер
            const placemark1 = new ymaps.Placemark(
                coords1,
                {
                    hintContent: "Завод ООО «Электрощит-К°»",
                    balloonContent: "249210, Россия, Калужская область, п.Бабынино, ул.Советская, 24"
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/local/icon.svg',
                    iconImageSize: iconSize,
                    iconImageOffset: iconOffset
                }
            );

            // Второй маркер
            const placemark2 = new ymaps.Placemark(
                coords2,
                {
                    hintContent: "ЧУП «БелИНДУСТРИЯ»",
                    balloonContent: "220036, г. Минск, ул. К. Либкнехта, 128 В, к. 4, 5"
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/local/icon.svg',
                    iconImageSize: iconSize,
                    iconImageOffset: iconOffset
                }
            );

            map.geoObjects.add(placemark1);
            map.geoObjects.add(placemark2);

            // Автоматически масштабируем, чтобы обе точки были видны
            const bounds = ymaps.geoQuery([placemark1, placemark2]).getBounds();
            if (bounds) {
                // Немного уменьшаем максимальный зум на мобильных для лучшей видимости
                map.setBounds(bounds, {
                    checkZoomRange: true,
                    zoomMargin: isMobile ? 80 : 40
                });
            }
        }
    })();
    /* подключаем карту */
    /* цвет хедера */
    (function () {
        // Проверяем наличие необходимых элементов
        const header = document.querySelector('.js-header');
        const banner = document.querySelector('.js-main-banner');

        if (!header || !banner) return;

        // Функция для проверки позиции
        function checkPosition() {
            const headerRect = header.getBoundingClientRect();
            const bannerRect = banner.getBoundingClientRect();

            // Проверяем, виден ли banner в viewport
            const isBannerVisible = bannerRect.top < window.innerHeight && bannerRect.bottom > 0;

            // Если header находится над banner и banner виден
            if (headerRect.bottom > bannerRect.top && isBannerVisible) {
                header.classList.add('white');
            } else {
                header.classList.remove('white');
            }
        }

        // Добавляем обработчик скролла
        window.addEventListener('scroll', checkPosition);

        // Вызываем проверку сразу при загрузке
        checkPosition();
    })();
    /* цвет хедера */
    /* создаем модалку чертежа */
    (function () {
        let modal = null;
    
        document.addEventListener('click', function (e) {
            const trigger = e.target.closest('.js-trigger-look-drawings');
            if (!trigger) return;
    
            e.preventDefault();
    
            const src = trigger.getAttribute('data-img');
            if (!src) return;
    
            openModal(src);
        });
    
        function openModal(imageSrc) {
            destroyModal();
    
            modal = createModal(imageSrc);
            document.body.appendChild(modal);
    
            modal.classList.add('active');
        }
    
        function destroyModal() {
            if (modal) {
                modal.remove();
                modal = null;
            }
        }
    
        function createModal(imageSrc) {
            const root = document.createElement('div');
            root.className = 'modal-gallery drawings'; // при желании уточните BEM под свои стили
    
            const content = document.createElement('div');
            content.className = 'modal-gallery__content';
    
            const closeBtn = document.createElement('button');
            closeBtn.type = 'button';
            closeBtn.className = 'modal-gallery__close modal-gallery-close';
            closeBtn.setAttribute('aria-label', 'Закрыть');
            closeBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M6.65039 6.65L0.650391 0.650002M6.65039 6.65L12.6504 12.65M6.65039 6.65L12.6504 0.650002M6.65039 6.65L0.650391 12.65" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
    
            const wrap = document.createElement('div');
            wrap.className = 'modal-gallery__drawings-inner';
    
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = '';
            img.loading = 'lazy';
            img.decoding = 'async';
    
            wrap.appendChild(img);
            content.appendChild(closeBtn);
            content.appendChild(wrap);
            root.appendChild(content);
    
            root.addEventListener('click', function (e) {
                if (
                    e.target.classList.contains('modal-gallery') ||
                    e.target.classList.contains('modal-gallery-close')
                ) {
                    destroyModal();
                }
            });
    
            document.addEventListener('keydown', function escHandler(e) {
                if (e.key === 'Escape') {
                    destroyModal();
                    document.removeEventListener('keydown', escHandler);
                }
            });
    
            return root;
        }
    })();
    /* создаем модалку чертежа */
    /* кнопка копирует ссылку текущей страницы */
    DOC.on('click', '.js-copy-link-news', function (e) {
        e.preventDefault();

        const url = window.location.href;
        const $btn = $(this);
        const $text = $btn.find('.text');
        const originalText = $text.length ? $text.text() : '';

        function showCopied() {
            if (!$text.length) return;

            $text.text('Скопировано');
            setTimeout(function () {
                $text.text(originalText);
            }, 2000);
        }

        function fallbackCopy() {
            const $input = $('<input>').val(url).css({
                position: 'fixed',
                opacity: 0,
                pointerEvents: 'none',
            });

            $('body').append($input);
            $input[0].select();

            try {
                document.execCommand('copy');
                showCopied();
            } catch (err) {}

            $input.remove();
        }

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(url).then(showCopied).catch(fallbackCopy);
        } else {
            fallbackCopy();
        }
    });
     /* кнопка копирует ссылку текущей страницы */

    /* модалка фотоальбома */
    (function () {
        let modal = null;
        let swiper = null;

        document.addEventListener('click', function (e) {
            const btn = e.target.closest('.js-btn-card-photo-album');
            if (!btn) return;

            const list = btn.closest('.js-photo-album-list');
            if (!list) return;

            e.preventDefault();

            const li = btn.closest('li');
            if (!li) return;

            const currentIndex = Array.prototype.indexOf.call(list.children, li);
            if (currentIndex < 0) return;

            if (!modal) {
                modal = createModal(list);
                document.body.appendChild(modal);

                const swiperEl = modal.querySelector('.swiper-photo-album-modal.swiper');
                const prevBtn = modal.querySelector('.slider_nav__left');
                const nextBtn = modal.querySelector('.slider_nav__right');

                if (!swiperEl) return;

                swiper = new Swiper(swiperEl, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    speed: 600,
                    navigation: {
                        prevEl: prevBtn,
                        nextEl: nextBtn,
                    },
                    pagination: {
                        el: '.photo-album-pagination',
                        type: 'custom',
                        renderCustom: function (swiper, current, total) {
                            return `<span class="current">${current}</span> из <span class="total">${total}</span>`;
                        }
                    },
                    observer: true,
                    observeParents: true,
                });
           

                function closeModal() {
                    modal.classList.remove('active');
                }

                modal.addEventListener('click', function (ev) {
                    const target = ev.target;

                    if (
                        target.classList.contains('modal-gallery') ||
                        target.classList.contains('modal-gallery-close')
                    ) {
                        closeModal();
                    }
                });

                document.addEventListener('keydown', function (ev) {
                    if (ev.key === 'Escape' && modal.classList.contains('active')) {
                        closeModal();
                    }
                });
            }

            modal.classList.add('active');

            requestAnimationFrame(function () {
                swiper.update();
                swiper.slideTo(currentIndex, 0);
            });
        });

        function createModal(list) {
            const root = document.createElement('div');
            root.className = 'modal-gallery photo-album';

            const content = document.createElement('div');
            content.className = 'modal-gallery__content';

            const closeBtn = document.createElement('button');
            closeBtn.type = 'button';
            closeBtn.className = 'modal-gallery__close modal-gallery-close';
            closeBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M6.65039 6.65L0.650391 0.650002M6.65039 6.65L12.6504 12.65M6.65039 6.65L12.6504 0.650002M6.65039 6.65L0.650391 12.65" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;

            const swiperEl = document.createElement('div');
            swiperEl.className = 'swiper-photo-album-modal swiper';

            const wrapper = document.createElement('div');
            wrapper.className = 'swiper-wrapper';

            list.querySelectorAll('.js-photo-album-item').forEach(function (item) {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.appendChild(item.cloneNode(true));
                wrapper.appendChild(slide);
            });

            swiperEl.appendChild(wrapper);

            const sectNav = document.createElement('div');
            sectNav.className = 'sect_nav';
            sectNav.innerHTML = `
                <div class="slider_nav">
                    <button type="button" class="slider_nav__left">
                        <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.8 6.69111C25.2418 6.69111 25.6 6.33294 25.6 5.89111C25.6 5.44929 25.2418 5.09111 24.8 5.09111L24.8 5.89111L24.8 6.69111ZM0.234301 5.32543C-0.0781173 5.63785 -0.0781174 6.14438 0.234301 6.4568L5.32547 11.548C5.63789 11.8604 6.14442 11.8604 6.45684 11.548C6.76926 11.2355 6.76926 10.729 6.45684 10.4166L1.93136 5.89111L6.45684 1.36563C6.76926 1.05321 6.76926 0.546677 6.45684 0.234258C6.14442 -0.0781619 5.63789 -0.078162 5.32547 0.234257L0.234301 5.32543ZM24.8 5.89111L24.8 5.09111L0.799988 5.09111L0.799988 5.89111L0.799988 6.69111L24.8 6.69111L24.8 5.89111Z" fill="#141414"/>
                        </svg>
                    </button>
                    <button type="button" class="slider_nav__right">
                        <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.799988 6.69111C0.35816 6.69111 -1.21803e-05 6.33294 -1.2219e-05 5.89111C-1.22576e-05 5.44929 0.35816 5.09111 0.799988 5.09111L0.799988 5.89111L0.799988 6.69111ZM25.3657 5.32543C25.6781 5.63785 25.6781 6.14438 25.3657 6.4568L20.2745 11.548C19.9621 11.8604 19.4556 11.8604 19.1431 11.548C18.8307 11.2355 18.8307 10.729 19.1431 10.4166L23.6686 5.89111L19.1431 1.36563C18.8307 1.05321 18.8307 0.546677 19.1431 0.234258C19.4556 -0.0781619 19.9621 -0.078162 20.2745 0.234257L25.3657 5.32543ZM0.799988 5.89111L0.799988 5.09111L24.8 5.09111L24.8 5.89111L24.8 6.69111L0.799988 6.69111L0.799988 5.89111Z" fill="#141414"/>
                        </svg>
                    </button>
                </div>
                <div class="photo-album-pagination"></div>
            `;

            content.appendChild(closeBtn);
            content.appendChild(swiperEl);
            content.appendChild(sectNav);
            root.appendChild(content);

            return root;
        }
    })();
    /* модалка фотоальбома */
});