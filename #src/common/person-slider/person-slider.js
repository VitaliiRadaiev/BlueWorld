{
    let uspsSlider = document.querySelector('.person-slider')
    if(uspsSlider) {
        let dataUspsSlider = new Swiper(uspsSlider.querySelector('.swiper-container'), {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            speed: 800,
            loop: true,
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
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    }
}