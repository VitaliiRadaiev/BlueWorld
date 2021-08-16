{
    let header = document.querySelector('.header');
    if(header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scroll', window.pageYOffset > 50);
        })
    }

    let navbarToggle = document.querySelector('.header .navbar-toggler');
    let menu = document.querySelector('.header__menu');
    if(navbarToggle && menu) {
        navbarToggle.addEventListener('click', () => {
            header.classList.toggle('menu-is-open');
            _slideToggle(menu, 400);
        })
    }
}