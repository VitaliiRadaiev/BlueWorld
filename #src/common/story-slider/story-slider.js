{
    let storySlider = document.querySelector('.story-slider');
    if(storySlider) {
        let dataSlider = new Swiper(storySlider.querySelector('.swiper-container'), {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 50,
            autoHeight: true,
            speed: 800,
            loop: true,
        });

        let buttons = storySlider.querySelectorAll('.story-slider__btn-next');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                dataSlider.slideNext();
            })
        })
    }
}