"use strict";

const swiper1 = new window.Swiper(".swiper-1", {
  direction: "vertical",
  loop: true,

  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const swiper2 = new window.Swiper(".swiper-2", {
  initialSlide: 1,
  slidesPerView: 3,
  centeredSlides: true,
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

export { swiper1, swiper2 };