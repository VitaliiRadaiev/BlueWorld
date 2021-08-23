{
    let storySlider = document.querySelector('.story-slider');
    if(storySlider) {
        let dataSlider = new Swiper(storySlider.querySelector('.swiper-container'), {
            slidesPerView: 1,
            spaceBetween: 50,
            speed: 800,
        });

        let buttons = storySlider.querySelectorAll('.story-slider__btn-next');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                if(btn.classList.contains('link-icon-left')) {
                    dataSlider.slideTo(0);
                } else {
                    dataSlider.slideNext();
                }
            })
        })
    }
}