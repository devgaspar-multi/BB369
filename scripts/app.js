var swiper = new Swiper(".carrossel", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    991: {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 60,
    },
    767: {
      slidesPerView: 1.2,
      centeredSlides: true,
      spaceBetween: 40,
    },
  },
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
