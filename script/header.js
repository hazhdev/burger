const buttonClose = document.querySelector('.burger__close');
const buttonMenu = document.querySelector('.burger__menu');
const headerList = document.querySelector('.header__nav-list');
const headerBurger = document.querySelector('.header__burger');

buttonClose.style.display = 'none';

buttonMenu.addEventListener('click', () => {
    headerList.style.display = 'flex';
    buttonMenu.style.display = 'none';
    buttonClose.style.display = 'block';
});

buttonClose.addEventListener('click', () => {
    headerList.style.display = 'none';
    buttonMenu.style.display = 'block';
    buttonClose.style.display = 'none';
});

if (window.innerWidth > 600) {
    headerBurger.style.display = 'none'
} else {
    headerBurger.style.display = 'block'
}