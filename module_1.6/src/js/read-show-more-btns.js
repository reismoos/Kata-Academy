const readMoreBtn = document.querySelector('.about-text__read-more');
const aboutTextFirstHidden = document.querySelector('.about__text--hidden-first');
const aboutTextLastHidden = document.querySelector('.about__text--hidden-last');

const showAllBtn = document.getElementsByClassName('show-all-btn');
console.log(showAllBtn)

const showText = () => {
    if(aboutTextFirstHidden.classList.contains('about__text--opened-text') || aboutTextLastHidden.classList.contains('about__text--opened-text')) {
        aboutTextFirstHidden.classList.remove('about__text--opened-text');
        aboutTextLastHidden.classList.remove('about__text--opened-text');
        readMoreBtn.innerHTML = 'Показать все';
        readMoreBtn.style.setProperty('--rotate', '0deg')
    } else {
        aboutTextFirstHidden.classList.add('about__text--opened-text');
        aboutTextLastHidden.classList.add('about__text--opened-text');
        readMoreBtn.innerHTML = 'Скрыть';
        readMoreBtn.style.setProperty('--rotate', '180deg')
    }
}

const showCards = (element) => {
    console.log(element.style.cssText)
    if(element.style.cssText === '--rotate:180deg;') {
        console.log('1')
        if(element.classList.contains('repair__show-all')){
            document.querySelector('.repair-slider').classList.remove('show-all-btn--full');
        } else {
            document.querySelector('.repair-technic__slider').classList.remove('show-all-btn--full');
        }
        element.innerHTML = 'Показать все';
        element.style.setProperty('--rotate', '0deg');
    } else {
        if(element.classList.contains('repair__show-all')){
            document.querySelector('.repair-slider').classList.add('show-all-btn--full');
        } else {
            document.querySelector('.repair-technic__slider').classList.add('show-all-btn--full');
        }
        element.innerHTML = 'Скрыть';
        element.style.setProperty('--rotate', '180deg');
    }
}

readMoreBtn.addEventListener('click', showText);
for (let i = 0; i < showAllBtn.length; i++) {
    showAllBtn[i].addEventListener('click', () => {
        showCards(showAllBtn[i])
    })
}


export {showAllBtn}