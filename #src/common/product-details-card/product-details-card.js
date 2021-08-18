{
    let productDetailSlider = document.querySelector('.product-details-card__slider');
    if(productDetailSlider) {
        let dataProductDetailSlider = new Swiper(productDetailSlider, {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            loop: true,
            pagination: {
            	el: productDetailSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
        });
    }
}