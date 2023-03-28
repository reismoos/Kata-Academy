const activateSlider = () => {
    const width = window.innerWidth
    if (width < 768) {
        console.log('sdf')
        new Swiper('.repair-slider-container', {
            pagination: {
                el: '.repair__pagination',
                clickable: true,
            },
            slidesPerView: "auto",
            spaceBetween: 16,
        })
    }
}
document.addEventListener('DOMContentLoaded', activateSlider);
window.addEventListener('resize', activateSlider)



const showAllCompanyBtn = document.querySelector('.repair__show-all');
const repairSlider = document.querySelector('.repair-slider');
const showOrHide = () => {
    if(repairSlider.classList.contains('repair-slider--full')) {
        repairSlider.classList.remove('repair-slider--full');
        showAllCompanyBtn.innerHTML = 'Показать все';
        document.querySelector(".repair__show-all").style.setProperty('--rotate', '0deg');
    } else {
        repairSlider.classList.add('repair-slider--full');
        showAllCompanyBtn.innerHTML = 'Скрыть';
        document.querySelector(".repair__show-all").style.setProperty('--rotate', '180deg');
    }
}
showAllCompanyBtn.addEventListener('click', showOrHide)