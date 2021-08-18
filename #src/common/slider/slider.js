{
    let slider = document.querySelector('.slider');
    if(slider) {
        let dataSlider = new Swiper(slider.querySelector('.swiper-container'), {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            preloadImages: false,
            lazy: {
            	loadPrevNext: true,
            },
            pagination: {
            	el: slider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
        });
    }
}