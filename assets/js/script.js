(function ($) {
	var imageSlider = new Swiper(".image__slider", {
		loop: true,
		spaceBetween: 24,
		speed: 300,
		effect: "fade",
	});

	var contentSlider = new Swiper(".content__slider", {
		loop: true,
		spaceBetween: 24,
		speed: 300,
		navigation: {
			nextEl: ".content__arry-next",
			prevEl: ".content__arry-prev",
		},
	});
	imageSlider.controller.control = contentSlider;
	contentSlider.controller.control = imageSlider;
})(jQuery);
