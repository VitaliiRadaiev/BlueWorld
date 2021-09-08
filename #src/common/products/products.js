{
    let category = document.querySelector('#category');
    if(category) {
        let categoryList = category.querySelector('.products__list');
        let btn = category.querySelector('.products__load-more');
        let btnWrapper = category.querySelector('.products__bottom');
    
        if(categoryList.children.length > 9) {
            let children = Array.from(categoryList.children);
            let lastItems = children.slice(9);

            lastItems.forEach(item => item.style.display = 'none');

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                lastItems.forEach(item => item.style.display = 'block');
                btnWrapper.setAttribute('hidden', '');
            })
        } else {
            btnWrapper.setAttribute('hidden', '');
        }
    }

    let productSliders = document.querySelectorAll('.products__list.swiper-container');
    if(productSliders.length) {
        productSliders.forEach(productSlider => {
            let wrapper = productSlider.querySelector('.swiper-wrapper');
            if(wrapper.children.length > 3) {
                let dataSlider = new Swiper(productSlider, {

                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    loop: true,
                    speed: 800,
                    pagination: {
                    	el: productSlider.querySelector('.swiper-pagination'),
                    	clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                            autoHeight: true,
                        },
                        575.98: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    },
                });
                
            } else {
                productSlider.classList.add('not-slider')
            }
        })
    }
}