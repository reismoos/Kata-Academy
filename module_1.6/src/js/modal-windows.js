const callBtn = document.querySelector('.hided-btns__call'),
      feedbackBtn = document.querySelector('.hided-btns__chat'),
      modalCall = document.querySelector('.call'),
      modalFeedback = document.querySelector('.modal-feedback'),
      popupBG = document.querySelector('.popup-bg'),
      closeBtnCall = document.querySelector('.call__btn-close'),
      closeBtnFeedback = document.querySelector('.modal-feedback__btn-close'),
      burgerBtnCall = document.querySelector('.burger-popup-btn__call'),
      burgerBtnFeedback = document.querySelector('.burger-popup-btn__message'),
      burgerPopup = document.querySelector('.burger-popup');




const openModalCall = () => {
    modalCall.classList.add('modal-window--active');
    popupBG.classList.add('popup-bg--active');
    burgerPopup.classList.add('burger-popup--hide');
}

const closeModalCall= () => {
    modalCall.classList.remove('modal-window--active');
    popupBG.classList.remove('popup-bg--active');
    burgerPopup.classList.remove('burger-popup--hide');
}

const openModalFeedback = () => {
    modalFeedback.classList.add('modal-window--active');
    popupBG.classList.add('popup-bg--active');
    burgerPopup.classList.add('burger-popup--hide');
}

const closeModalFeedback = () => {
    modalFeedback.classList.remove('modal-window--active');
    popupBG.classList.remove('popup-bg--active');
    burgerPopup.classList.remove('burger-popup--hide');
}

callBtn.addEventListener('click', openModalCall);
closeBtnCall.addEventListener('click', closeModalCall);
feedbackBtn.addEventListener('click', openModalFeedback);
closeBtnFeedback.addEventListener('click', closeModalFeedback);
burgerBtnCall.addEventListener('click', openModalCall);
burgerBtnFeedback.addEventListener('click', openModalFeedback);

export {callBtn} 