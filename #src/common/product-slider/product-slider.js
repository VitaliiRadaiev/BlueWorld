{   
    let productSlider = document.querySelector('.product-slider');
    if(productSlider) {
        let sliderData = new Swiper(productSlider.querySelector('.swiper-container'), {
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
            slidesPerView: 'auto',
            speed: 5000,
            loop: true,
            breakpoints: {
                320: {

                    spaceBetween: 20
                },
                768: {
                    spaceBetween: 30,
                },
            },
            
        });
    }

}