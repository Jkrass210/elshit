/**
 * jQuery SVG Map Plugin
 * Работа с SVG-картой, регионы — path с атрибутом data-map-id
 */
(function($) {
    'use strict';

    var REGION_SELECTOR = 'path[data-map-id]';

    function parseIdList(str) {
        if (!str || typeof str !== 'string') return [];
        return str.split(',').map(function(s) { return s.trim(); }).filter(Boolean);
    }

    function getPathIds(path) {
        var id = $(path).attr('data-map-id');
        if (!id) return [];
        return parseIdList(id);
    }

    function pathMatchesIds(path, idList) {
        if (!idList.length) return false;
        var pathIds = getPathIds(path);
        return pathIds.some(function(pid) {
            return idList.indexOf(pid) !== -1;
        });
    }

    function applyStyles($el, styles) {
        if (!styles) return;
        if (styles.fill != null) $el.attr('fill', styles.fill);
        if (styles.stroke != null) $el.attr('stroke', styles.stroke);
        if (styles.strokeWidth != null) $el.attr('stroke-width', styles.strokeWidth);
    }

    function debugLog(opts, label, data) {
        if (opts.debug && window.console && typeof window.console.log === 'function') {
            window.console.log('[svgMap] ' + label, data !== undefined ? data : '');
        }
    }

    $.fn.svgMap = function(options) {
        var opts = $.extend(true, {}, $.fn.svgMap.defaults, options);

        return this.each(function() {
            var $container = $(this);
            var $svg = $container.find('svg').first();
            if (!$svg.length) $svg = $container.is('svg') ? $container : null;
            if (!$svg.length) {
                debugLog(opts, 'Ошибка: SVG не найден в контейнере', $container.attr('id') || $container[0].className || '');
                return;
            }

            var regionIds = parseIdList(opts.regionIds);
            var onlyClickableIds = opts.onlyClickableIds;

            debugLog(opts, 'Инициализация', {
                regionIds: regionIds,
                onlyClickableIds: onlyClickableIds,
                onRegionClick: typeof opts.onRegionClick === 'function' ? 'есть' : 'НЕТ (клики не обрабатываются!)'
            });

            if (opts.cursorUrl) {
                $container.css('cursor', 'url(' + opts.cursorUrl + ') ' + (opts.cursorFallback || 'pointer') + ', pointer');
            }

            var $paths = $svg.find(REGION_SELECTOR);
            debugLog(opts, 'Найдено path с data-map-id', $paths.length);
            if (opts.debug && $paths.length) {
                var sampleIds = [];
                $paths.slice(0, 5).each(function() { sampleIds.push($(this).attr('data-map-id')); });
                debugLog(opts, 'Примеры data-map-id (первые 5)', sampleIds);
            }

            $paths.each(function() {
                var $path = $(this);
                var pathIds = getPathIds(this);
                var isHighlight = pathMatchesIds(this, regionIds);

                $path.attr('data-svg-map-region', '1');

                applyStyles($path, opts.region);

                if (isHighlight) {
                    $path.addClass(opts.highlightClass);
                    applyStyles($path, opts.regionHighlight);
                }

                $path.data('svg-map-original-fill', $path.attr('fill'));
                $path.data('svg-map-original-stroke', $path.attr('stroke'));
                $path.data('svg-map-original-stroke-width', $path.attr('stroke-width'));
                $path.data('svg-map-is-highlight', isHighlight);
            });

            if (opts.iconInCenter && opts.cursorUrl && regionIds.length) {
                var iconW = opts.iconWidth || 24;
                var iconH = opts.iconHeight || 28;
                $container.css('position', $container.css('position') === 'static' ? 'relative' : '');

                function placeIcons() {
                    $container.find('.svg-map-icons-overlay').remove();
                    var containerRect = $container[0].getBoundingClientRect();
                    var $overlay = $('<div class="svg-map-icons-overlay"></div>').css({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        pointerEvents: 'none'
                    });

                    $paths.each(function() {
                        if (!$(this).data('svg-map-is-highlight')) return;
                        var path = this;
                        var $path = $(path);
                        var mapId = $path.attr('data-map-id');
                        var mapCityId = $path.attr('data-map-city-id');
                        var mapElementId = $path.attr('data-map-element-id') || $path.attr('data-path-id') || mapId;

                        if (!mapId) return;
                        var rect = path.getBoundingClientRect();
                        var cx = rect.left + rect.width / 2 - containerRect.left;
                        var cy = rect.top + rect.height / 2 - containerRect.top;

                        var $img = $('<img>').attr({
                            src: opts.cursorUrl,
                            'data-map-id': mapId,
                            'data-map-city-id': mapCityId || mapId,
                            'data-map-element-id': mapElementId,
                            alt: ''
                        }).addClass(opts.iconClass).css({
                            position: 'absolute',
                            left: (cx - iconW / 2) + 'px',
                            top: (cy - iconH / 2) + 'px',
                            width: iconW + 'px',
                            height: iconH + 'px',
                            pointerEvents: 'all',
                            cursor: 'pointer'
                        }).on('click.svgMap', function(e) {
                            debugLog(opts, 'Клик по иконке (курсору)', mapId);
                            if (typeof opts.onRegionClick === 'function') {
                                debugLog(opts, 'Вызов onRegionClick (иконка)', mapId);
                                opts.onRegionClick(mapId, e);
                            } else {
                                debugLog(opts, 'onRegionClick не задан — клик по иконке не обработан');
                            }
                        });
                        $overlay.append($img);
                    });

                    $container.append($overlay);
                    debugLog(opts, 'Иконки расставлены, всего', $overlay.children().length);
                }

                placeIcons();
                $(window).on('resize.svgMap', placeIcons);
            }

            $paths.on('mouseenter.svgMap', function(e) {
                var $path = $(this);
                var isHighlight = $path.data('svg-map-is-highlight');
                if (!opts.disableHover && opts.regionHover) {
                    applyStyles($path, opts.regionHover);
                }
                if (typeof opts.onRegionHover === 'function') {
                    opts.onRegionHover($path.attr('data-map-id'), e);
                }
            });

            $paths.on('mouseleave.svgMap', function(e) {
                var $path = $(this);
                var isHighlight = $path.data('svg-map-is-highlight');
                if (opts.disableHover) return;
                if (isHighlight && opts.regionHighlight) {
                    applyStyles($path, opts.regionHighlight);
                } else if (opts.region) {
                    applyStyles($path, opts.region);
                }
            });

            $paths.on('click.svgMap', function(e) {
                var $path = $(this);
                var mapId = $path.attr('data-map-id');
                var isHighlight = $path.data('svg-map-is-highlight');

                debugLog(opts, 'Клик по path', { mapId: mapId, isHighlight: isHighlight, onlyClickableIds: onlyClickableIds });

                if (onlyClickableIds && !isHighlight) {
                    debugLog(opts, 'Клик проигнорирован: onlyClickableIds=true и регион не в списке highlight');
                    e.preventDefault();
                    return false;
                }

                if (typeof opts.onRegionClick === 'function') {
                    debugLog(opts, 'Вызов onRegionClick (path)', mapId);
                    opts.onRegionClick(mapId, e);
                } else {
                    debugLog(opts, 'onRegionClick не задан — клик по path не обработан');
                }
            });
        });
    };

    $.fn.svgMap.defaults = {
        debug: false,
        cursorUrl: '',
        cursorFallback: 'pointer',
        disableHover: false,
        iconInCenter: true,
        iconWidth: 23,
        iconHeight: 28,
        iconClass: 'map_cursor',
        regionIds: '',
        highlightClass: 'svg-map-region-highlight',
        onlyClickableIds: false,
        region: {
            fill: '#e8e8e8',
            stroke: '#999999',
            strokeWidth: 1
        },
        regionHighlight: {
            fill: '#4a90d9',
            stroke: '#2c6bb5',
            strokeWidth: 2
        },
        regionHover: {
            fill: '#6ba3e0',
            stroke: '#2c6bb5',
            strokeWidth: 2
        },
        onRegionClick: null,
        onRegionHover: null
    };

})(jQuery);