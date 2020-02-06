var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow'
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
});

var menuButton = document.querySelector('.menu__button');
var menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu__button_active');
    menu.classList.toggle('header__active');
});