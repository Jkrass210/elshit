$(function () {

    const DOC = $(document);
    const WIN = $(window);

    /*function validateForm($form, options) {
        const settings = $.extend({
            defaultMessage: 'Пожалуйста, заполните это поле',
            phoneMessage: 'Введите полный номер телефона (11 цифр)',
            checkboxMessage: 'Необходимо согласие на обработку данных',
            messageClass: 'field-message',
            errorClass: 'error',
            validClass: 'valid',
            showMessages: true // глобальная настройка (если true, но у поля false – сообщение не выводится)
        }, options);

        let isValid = true;

        // 1. Текстовые поля и textarea
        const $fields = $form.find(`
        input:not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="button"]):not([type="submit"]):not([data-validate="false"]),
        textarea:not([data-validate="false"])
    `);

        $fields.each(function () {
            const $field = $(this);
            const $wrapper = $field.closest('.field_set');
            const value = $field.val() || '';
            const isPhone = $field.hasClass('mask-phone');

            // Определяем, нужно ли показывать сообщение для этого поля
            let showMessageForField = settings.showMessages;
            if ($field.is('[data-show-message]')) {
                showMessageForField = $field.data('show-message') !== false; // "false" (строка) или false – не показывать
            }

            let valid = false;
            let errorMessage = settings.defaultMessage;

            if ($field.data('error-message')) {
                errorMessage = $field.data('error-message');
            } else if (isPhone) {
                errorMessage = settings.phoneMessage;
            }

            if (isPhone) {
                const digits = value.replace(/\D/g, '');
                valid = (digits.length === 11);
            } else {
                valid = (value.trim() !== '');
            }

            // Удаляем старое сообщение
            $(`.${settings.messageClass}`, $wrapper).remove();

            // Добавляем классы
            if ($wrapper.length) {
                $wrapper.removeClass(settings.errorClass + ' ' + settings.validClass);
                $wrapper.addClass(valid ? settings.validClass : settings.errorClass);
                if (!valid && showMessageForField) {
                    $wrapper.append(`<div class="${settings.messageClass}">${errorMessage}</div>`);
                }
            } else {
                $field.removeClass(settings.errorClass + ' ' + settings.validClass);
                $field.addClass(valid ? settings.validClass : settings.errorClass);
                if (!valid && showMessageForField) {
                    $field.after(`<div class="${settings.messageClass}">${errorMessage}</div>`);
                }
            }

            if (!valid) isValid = false;
        });

        // 2. Чекбокс согласия
        const $checkbox = $form.find('.filed_checkbox input[type="checkbox"]:not([data-validate="false"])');
        if ($checkbox.length) {
            const $checkboxWrapper = $checkbox.closest('.filed_checkbox');
            let checkboxValid = $checkbox.prop('checked');

            let showMessageForCheckbox = settings.showMessages;
            if ($checkbox.is('[data-show-message]')) {
                showMessageForCheckbox = $checkbox.data('show-message') !== false;
            }

            $(`.${settings.messageClass}`, $checkboxWrapper).remove();

            if ($checkboxWrapper.length) {
                $checkboxWrapper.removeClass(settings.errorClass + ' ' + settings.validClass);
                $checkboxWrapper.addClass(checkboxValid ? settings.validClass : settings.errorClass);
                if (!checkboxValid && showMessageForCheckbox) {
                    $checkboxWrapper.append(`<div class="${settings.messageClass}">${settings.checkboxMessage}</div>`);
                }
            } else {
                $checkbox.removeClass(settings.errorClass + ' ' + settings.validClass);
                $checkbox.addClass(checkboxValid ? settings.validClass : settings.errorClass);
                if (!checkboxValid && showMessageForCheckbox) {
                    $checkbox.after(`<div class="${settings.messageClass}">${settings.checkboxMessage}</div>`);
                }
            }

            if (!checkboxValid) isValid = false;
        }
        // 3. Файлы
        const $files = $form.find('.field_upload input[type="file"]:not([data-validate="false"])');
        if ($files.length) {
            const $filesWrapper = $files.closest('.field_upload');
            let filesValid = true;
            $files.each(function () {
                const $file = $(this);
                const file = $file.files[0];
                if (!file) {
                    filesValid = false;
                    return;
                }
                if (file.size > 5 * 1024 * 1024) {
                    filesValid = false;
                }
            });
            if (!filesValid) {
                $filesWrapper.addClass('error');
            } else {
                $filesWrapper.addClass('show');
            }
            if (!filesValid) isValid = false;
        }

        return isValid;
    }*/

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

    function closeModal(modal) {
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

});