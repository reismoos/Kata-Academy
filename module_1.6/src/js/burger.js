const burgerPopup = document.querySelector('.burger-popup');
const popupBG = document.querySelector('.popup-bg')
const burgerBtn = document.querySelector('.logo-and-burger__burger-btn');
const closeBurgerBtn = document.querySelector('.burger-popup-btn__close');

const openBurger = () => {
    burgerPopup.classList.add('burger-popup--active-burger-popup');
    popupBG.classList.add('popup-bg--active');
}
const closeBurger = () => {
    burgerPopup.classList.remove('burger-popup--active-burger-popup');
    popupBG.classList.remove('popup-bg--active');
}

burgerBtn.addEventListener('click', openBurger);
closeBurgerBtn.addEventListener('click', closeBurger);
document.addEventListener('click', (evt) => {
    if(evt.target === popupBG) {
        closeBurger()
        document.querySelector('.call').classList.remove('modal-window--active');
        document.querySelector('.modal-feedback').classList.remove('modal-window--active');
        burgerPopup.classList.remove('burger-popup--hide');
    }
})

export {burgerBtn};