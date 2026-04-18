$(function() {

    const DOC = $(document);
    const WIN = $(window);

    // Функция для получения цвета под элементом
    // Функция для получения итогового фонового цвета элемента (рекурсивно ищет первый непрозрачный фон)
    function getRealBackgroundColor(el) {
        var $el = $(el);
        var bg = $el.css('background-color');
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
            return bg;
        }
        var parent = $el.parent();
        if (parent.length) {
            return getRealBackgroundColor(parent[0]);
        }
        return 'rgb(255, 255, 255)'; // по умолчанию белый
    }

    // Получение цвета под элементом (игнорируя сам элемент)
    function getColorUnderElement(el) {
        var $el = $(el);
        var rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return 'rgb(255,255,255)';

        // Берём центр элемента (можно и несколько точек для усреднения)
        var x = rect.left + rect.width / 2;
        var y = rect.top + rect.height / 2;

        // Временно скрываем элемент, чтобы он не мешал определению
        var oldVisibility = $el.css('visibility');
        var oldOpacity = $el.css('opacity');
        var oldPointerEvents = $el.css('pointer-events');
        $el.css({
            visibility: 'hidden',
            opacity: 0,
            'pointer-events': 'none'
        });

        var elemUnder = document.elementFromPoint(x, y);

        // Восстанавливаем стили
        $el.css({
            visibility: oldVisibility,
            opacity: oldOpacity,
            'pointer-events': oldPointerEvents
        });

        if (!elemUnder) return 'rgb(255,255,255)';

        // Получаем реальный фон найденного элемента (рекурсивно)
        return getRealBackgroundColor(elemUnder);
    }

    // Плагин jQuery для автоматического цвета текста
    $.fn.autoTextColor = function() {
        return this.each(function() {
            var $el = $(this);
            var bgColor = getColorUnderElement(this);
            var rgb = bgColor.match(/\d+/g);
            if (!rgb || rgb.length < 3) return;

            // Вычисляем яркость (формула восприятия)
            var brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
            var textColor = brightness > 128 ? '#141414' : '#ffffff';

            // Применяем цвет только если он изменился (избегаем лишних перерисовок)
            if ($el.css('color') !== textColor) {
                $el.css('color', textColor);
                console.log('Фон:', bgColor, 'Яркость:', brightness, 'Цвет текста:', textColor); // отладка, потом удалите
            }
        });
    };

    // Throttle для оптимизации событий scroll/resize
    function throttle(func, delay) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, delay);
        };
    }

    // Инициализация при загрузке и при скролле
    $(function() {
        // Применяем к нужному элементу (можно к нескольким)
        var $target = $('.order_fixed span');

        // Функция обновления
        var updateTextColor = function() {
            $target.autoTextColor();
        };

        // Вызываем сразу, если элемент видим
        if ($target.is(':visible')) {
            updateTextColor();
        }

        // Вешаем обработчики с задержкой 100 мс
        $(window).on('scroll resize', throttle(updateTextColor, 100));

        // Дополнительно: если фон меняется динамически (например, по клику), можно вызывать updateTextColor вручную
    });

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
});