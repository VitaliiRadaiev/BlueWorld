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
            menu.classList.toggle('open');
            document.body.classList.toggle('lock');
        })

        const setMenuHeight = () => {
            if(document.documentElement.clientWidth < 992) {
                menu.style.height = document.documentElement.clientHeight - header.clientHeight + 'px';
            }
        }

        setMenuHeight();
        window.addEventListener('resize', setMenuHeight);
        window.addEventListener('scroll', setMenuHeight);
    }
}