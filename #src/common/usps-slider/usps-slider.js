{
    let uspsSlider = document.querySelector('.usps-slider')
    if(uspsSlider) {
        let dataUspsSlider = new Swiper(uspsSlider.querySelector('.swiper-container'), {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            speed: 800,
            pagination: {
            	el: uspsSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    }
}