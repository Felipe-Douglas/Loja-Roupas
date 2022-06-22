slides = document.querySelectorAll('.swiper-slide');
var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 15,
    loop: false,
    fade: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

swiper.on('slideChange', function () {
    let lastVisibleItem = this.realIndex;
    console.log(lastVisibleItem);
    console.log(slides);
    for (let i = 0; i < swiper.length; i++) {
        if (lastVisibleItem < slides.length) {
            this.slideTo(slides[i]);
        }
    
        if (lastVisibleItem >= slides.length) {
            this.slideTo(slides[0]);
        }
    }
});