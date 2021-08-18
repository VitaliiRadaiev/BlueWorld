{
    let heroSlider = document.querySelector('.hero-slider');
    if(heroSlider) {
        let bgSlider = heroSlider.querySelector('.hero-slider__bg');
        let bodySlider = heroSlider.querySelector('.hero-slider__body');
       
        if(bgSlider && bodySlider) {
            let dataBgSlider = new Swiper(bgSlider, {
                effect: 'fade',
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 800,
                preloadImages: false,
                lazy: {
                	loadPrevNext: true,
                },
            });

            let dataBodySlider = new Swiper(bodySlider, {
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },

                slidesPerView: 1,
                spaceBetween: 0,
                speed: 800,
                pagination: {
                	el: heroSlider.querySelector('.swiper-pagination'),
                	clickable: true,
                },
                breakpoints: {
                    320: {
                        autoHeight: true,
                    },
                    992: {
                        autoHeight: false,
                    },
                },
            });

            dataBodySlider.controller.control = dataBgSlider
        }
    }
}