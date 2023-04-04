const activateSlider = () => {
    const width = window.innerWidth
    if (width < 768) {
        console.log('sdf')
        let swiper1 = new Swiper('.repair-slider-container', {
            pagination: {
                el: '.repair__pagination',
                clickable: true,
            },
            slidesPerView: "auto",
            spaceBetween: 16,
        })
        
        let swiper2 = new Swiper('.repair-technic__slider-container', {
            pagination: {
                el: '.repair-technic__pagination',
                clickable: true,
            },
            slidesPerView: "auto",
            spaceBetween: 16,
        })

        let swiperPrice = new Swiper('.price-slider-container', {
            pagination: {
                el: '.price_pagination',
                clickable: true,
            },
            slidesPerView: "auto",
            spaceBetween: 16,
        })
    }
}
document.addEventListener('DOMContentLoaded', activateSlider);


export default activateSlider