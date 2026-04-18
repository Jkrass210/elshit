$(function() {

    const DOC = $(document);
    const WIN = $(window);

    function validateForm($form, options) {
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

        $fields.each(function() {
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
            $files.each(function() {
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
    }

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


        const mediaQuerySM = window.matchMedia('(max-width: 1023px)');

        if (mediaQuerySM.matches) {
            e.preventDefault();
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

                WIN.on('resize', function() {
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

            WIN.on('resize', function() {
                if ($(this).next('ul').find('>li.menu-children').first().find('a').next('ul').length > 0) {
                    let menuOpenHeight = $(this).next('ul').find('>li.menu-children').first().find('a').next('ul').outerHeight();
                    $(this).next('ul').css('height', menuOpenHeight + 'px');
                }
            });
        }
    });
    DOC.on('click', '.menu-children a', function(e) {

        const mediaQueryMD = window.matchMedia('(min-width: 1024px) and (max-width: 1439px)');
        // const mediaQueryLG = window.matchMedia('(min-width: 1440px)');
        if (mediaQueryMD.matches) {

            e.preventDefault();
            $(this).closest('li').addClass('active').siblings().removeClass('active');
            $(this).next('ul').addClass('open').closest('li').siblings().find('ul').removeClass('open');
        }
    });
    DOC.on('click', '.menu-children .menu-children a', function(e) {

        const mediaQueryLG = window.matchMedia('(min-width: 1440px)');
        if (mediaQueryLG.matches) {
            if (!$(this).closest('.menu-children').hasClass('menu-default')) {
                e.preventDefault();
                $(this).closest('li').addClass('active').siblings().removeClass('active');
                $(this).next('ul').addClass('open').closest('li').siblings().find('ul').removeClass('open');
            } else {
                e.preventDefault();
                $(this).closest('li').addClass('active').siblings().removeClass('active');
                $(this).next('ul').addClass('open').closest('li').siblings().find('ul').removeClass('open');
                $(this).next('ul').find('>li.menu-children').first().addClass('active').find('a').next('ul').addClass('open'); // Открываем первый список по дефолту

                if ($(this).next('ul').find('>li.menu-children').first().find('a').next('ul').length > 0) {
                    let menuOpenHeight = $(this).next('ul').find('>li.menu-children').first().find('a').next('ul').outerHeight();
                    $(this).next('ul').css('height', menuOpenHeight + 'px');
                }
            }

        }
    });
    DOC.on('click', '.menu-close-lg', function(e) {
        e.preventDefault();
        const mediaQueryMD = window.matchMedia('(min-width: 1024px)');
        if (mediaQueryMD.matches) {
            $(this).closest('.menu-main').removeClass('active');
            $(this).closest('li').removeClass('active').siblings().removeClass('active');
            $(this).closest('ul').removeClass('open');
            $(this).closest('.header__menu').removeClass('open');
        }
    });

    DOC.on('click', '.accordion_sect__header', function(e) {
        e.preventDefault();
        $(this).closest('.accordion_sect').find('.accordion_sect__content').slideToggle(300).closest('.accordion_sect').siblings().find('.accordion_sect__content').slideUp(300);
        $(this).find('.i-arrow').toggleClass('active').closest('.accordion_sect').siblings().find('.i-arrow').removeClass('active');
    });

    //form validation

    function resetForm($form) {
        $form[0].reset();
        $form.removeClass('error');
        $form.find('.field-message').remove();
        $form.find('.filed_checkbox').removeClass('error').find('.field-message').remove();
        $form.find('.filed_checkbox').find('input').prop('checked', false).find('.check').removeClass('error').find('.field-message').remove();
        $form.find('input[type="file"]').val('').prop('disabled', false);
    }

    $('.field_upload').each(function() {
        const $fieldUpload = $(this);
        const $fileInput = $fieldUpload.find('input[type="file"]');
        const $closeBtn = $fieldUpload.find('.field_upload__close');

        $fileInput.on('change', function() {
            const file = this.files[0]; // this — DOM-элемент
            if (!file) return;
            $fieldUpload.addClass('show').find('.field_upload__name').text(file.name);
        });

        $closeBtn.off('click').on('click', function() {
            $fieldUpload.removeClass('show').find('.field_upload__name').text('');
            $fileInput.val(''); // сброс — разрешён, т.к. пустая строка
            $fieldUpload.removeClass('error').find('.field-message').remove();
        });
    });

    DOC.on('click', '.modal__close',
        function(e) {
            e.preventDefault();
            $(this).closest('.modal').fadeOut(300, function() {
                resetForm($(this).find('form'));
            });
        });
    // modal close outside click
    DOC.on('click', '.modal', function(e) {
        if (!$(e.target).closest('.modal__wrap').length) {
            $(this).fadeOut(300, function() {
                resetForm($(this).find('form'));
            });
        }
    });

    $('.mask-phone').inputmask({
        mask: '+7 (999) 999-99-99',
        // placeholder: '+7 (999) 999-99-99',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        showMaskOnEmpty: false,
    });

    const $form = $('.modal__form');

    // При отправке формы
    $form.on('submit', function(e) {
        e.preventDefault();
        const valid = validateForm($(this), {
            phoneMessage: 'Укажите полный номер в формате +7 (XXX) XXX-XX-XX',
            defaultMessage: 'Это поле не может быть пустым',
            // checkboxMessage: 'Поставьте галочку, чтобы продолжить'
        });
        if (valid) {
            console.log('Валидация пройдена, отправляем');
            // $(this)[0].submit();
        } else {
            console.log('Ошибки в форме');
        }
    });

    // Валидация при потере фокуса
    $form.on('blur', 'input, textarea', function() {
        validateForm($form);
    });

    // Для чекбокса – по изменению
    $form.on('change', '.filed_checkbox input', function() {
        validateForm($form);
    });

    let $modalOrder = $('.modal__order');

    $modalOrder.responsiveDom({
        appendTo: '.modal__wrap.col2',
        mediaQuery: '(min-width: 1024px)'
    });

    DOC.on('click', '.js-open-modal', function(e) {
        e.preventDefault();
        const modalLabel = $(this).attr('data-modal-label');
        $('.modal[data-modal-label="' + modalLabel + '"]').fadeIn(300);
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