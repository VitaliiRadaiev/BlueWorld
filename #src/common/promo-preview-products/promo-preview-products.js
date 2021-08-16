{
	const slider = document.querySelector('.promo-preview-products');
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider, {
					slidesPerView: 'auto',
                    spaceBetween: 20,
					speed: 600,
					// pagination: {
					//     el: slider.querySelector('.swiper-pagination'),
					//     clickable: true,
					// },
                    freeMode: true,
				});

				slider.dataset.mobile = 'true';

				//mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth > 767) {
				slider.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-container-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}

}