$(function () {
	console.log('start actives_on_main_4');

	let doc = $(document);

	let ActivityModals = {};
	let currentMode = null;
	let resizeTimer = null;
	let originalSlidesMap = {};

	function getCurrentMode() {
		return $(window).width() > 991 ? 'desktop' : 'mobile';
	}

	if ($('.activity-line-slider').length > 0) {
		const ActivitySlider = new Swiper('.activity-line-slider .swiper', {
			direction: 'vertical',
			freeMode: true,
			slidesPerView: 'auto',
			spaceBetween: 12,
			mousewheel: true,
			scrollbar: {
				draggable: true,
				el: '.activity-line-slider .swiper-scrollbar',
			},
			on: {
				progress: function (swiper, progress) {
					// console.log('swiper progress');
					// console.log(swiper);
					// console.log(progress);
					// console.log('_______________');
					if (progress >= 0.9) {
						$('.activity-line-slider').addClass('finish');
					}
					else {
						$('.activity-line-slider').removeClass('finish');
					}
				},
			}
		});
	}

	function saveOriginalSlides() {
		$('.activity-modal-slider').each(function (idx, slide) {
			let $slider = $(slide);
			let id = $slider.attr('data-id');

			if (!originalSlidesMap[id]) {
				originalSlidesMap[id] = [];
			}

			$slider.find('.swiper-wrapper > .swiper-slide').each(function () {
				originalSlidesMap[id].push(this);
			});
		});
	}

	function cleanupSwiperMarkup() {
		$('.activity-modal-slider .swiper').each(function () {
			let $swiper = $(this);

			$swiper.find('.swiper-slide-duplicate').remove();

			$swiper.find('.swiper-wrapper').removeAttr('style');

			$swiper.find('.swiper-slide').each(function () {
				$(this)
					.removeClass('swiper-slide-active swiper-slide-next swiper-slide-prev swiper-slide-duplicate')
					.removeAttr('style')
					.removeAttr('data-swiper-slide-index');
			});
		});
	}

	function destroyActivityModals() {
		$.each(ActivityModals, function (id, swiperInstance) {
			if (swiperInstance && typeof swiperInstance.destroy === 'function') {
				swiperInstance.destroy(true, true);
			}
		});

		ActivityModals = {};

		cleanupSwiperMarkup();
	}

	function initActivityModals() {
		$('.activity-modal-slider').each(function (idx, slide) {
			let id = $(slide).attr('data-id');

			ActivityModals[id] = new Swiper('.activity-modal-slider[data-id="' + id + '"] .swiper', {
				loop: false,
				slidesPerView: 1,
				spaceBetween: 0,
				effect: 'fade',
				fadeEffect: {
					crossFade: true
				},
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				navigation: {
					nextEl: '.activity-modal-slider[data-id="' + id + '"] .swiper-button-next',
					prevEl: '.activity-modal-slider[data-id="' + id + '"] .swiper-button-prev',
				},
				init: false,
			});

			ActivityModals[id].on('init', function (swiper) {
				//console.log('init ActivityModals');

				let $parent = $(swiper.el).closest('.activity-modal-slider');
				let realSlidesCount = $parent.find('.swiper-wrapper > .swiper-slide:not(.swiper-slide-duplicate)').length;

				$parent.find('.activity-modal-slider__counter-total').text(realSlidesCount);
				$parent.find('.activity-modal-slider__counter-current').text(swiper.realIndex + 1);
			});

			ActivityModals[id].on('activeIndexChange', function (swiper) {
				//console.log('activeIndexChange');

				let $parent = $(swiper.el).closest('.activity-modal-slider');
				$parent.find('.activity-modal-slider__counter-current').text(swiper.realIndex + 1);
			});

			ActivityModals[id].init();

			if (ActivityModals[id]) {
				ActivityModals[id].update();
				ActivityModals[id].slideTo(0, 0);
			}
		});
	}

	function moveSlidesToMobile() {
		let $mobileSlider = $('.activity-modal-slider_mobile').first();

		if (!$mobileSlider.length) {
			return;
		}

		let $mobileWrapper = $mobileSlider.find('.swiper-wrapper');

		$mobileWrapper.empty();

		$('.activity-modal-slider').each(function () {
			let id = $(this).attr('data-id');

			if (originalSlidesMap[id] && originalSlidesMap[id].length) {
				$.each(originalSlidesMap[id], function (index, slideEl) {
					$mobileWrapper.append(slideEl);
				});
			}
		});
	}

	function restoreSlidesToDesktop() {
		$('.activity-modal-slider').each(function () {
			let $slider = $(this);
			let id = $slider.attr('data-id');
			let $wrapper = $slider.find('.swiper-wrapper');

			$wrapper.empty();

			if (originalSlidesMap[id] && originalSlidesMap[id].length) {
				$.each(originalSlidesMap[id], function (index, slideEl) {
					$wrapper.append(slideEl);
				});
			}
		});
	}

	function rebuildActivityModals(force = false) {
		let newMode = getCurrentMode();

		if (!force && currentMode === newMode) {
			return;
		}

		destroyActivityModals();

		if (newMode === 'mobile') {
			moveSlidesToMobile();
		} else {
			restoreSlidesToDesktop();
		}

		initActivityModals();

		currentMode = newMode;
	}

	function updateAllActivityModals() {
		$.each(ActivityModals, function (id, swiperInstance) {
			if (swiperInstance) {
				swiperInstance.update();
			}
		});
	}

	if ($('.activity-modal-slider').length > 0) {
		saveOriginalSlides();
		rebuildActivityModals(true);
	}

	doc.on('click', '.activity-modal__close', function () {
		$('.activity-modal').removeClass('show');
		$('.activity-dir__map-area').removeClass('active');

		setTimeout(function () {
			updateAllActivityModals();
		}, 50);
	});

	doc.on('click', '.activity-line-slider__slide, .activity-dir__map-area', function (e) {
		let id = $(this).attr('data-region-id');
		console.log('____________START');
		console.log($(e.target).hasClass('activity-line-slider__slide'));
		console.log($(e.target).closest('.activity-line-slider__slide').length > 0);
		console.log('____________END');

		$('.activity-dir__map-area').removeClass('active');
		$('.activity-dir__map-area[data-region-id="' + id + '"]').addClass('active');

		$('.activity-modal-slider').removeClass('show');
		$('.activity-modal-slider').hide();
		$('.activity-modal-slider[data-id="' + id + '"]').addClass('show');
		$('.activity-modal-slider[data-id="' + id + '"]').fadeIn(300);

		if ($(e.target).hasClass('activity-line-slider__slide') || $(e.target).closest('.activity-line-slider__slide').length > 0) {
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

		$('.activity-modal').addClass('show');


		if (!$(e.target).hasClass('activity-line-slider__slide') && !$(e.target).closest('.activity-line-slider__slide').length > 0) {
			setTimeout(function () {
				updateAllActivityModals();
			}, 50);
		}

	});


	$(window).on('resize', function () {
		clearTimeout(resizeTimer);

		$('.activity-modal-slider').removeClass('show');
		$('.activity-modal-slider').hide();

		resizeTimer = setTimeout(function () {
			rebuildActivityModals();

			setTimeout(function () {
				updateAllActivityModals();
			}, 50);
		}, 200);
	});

});