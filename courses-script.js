var swiperExplore = new Swiper("#course-tab #explore .mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  // loop: true,
  scrollbar: {
    el: "#course-tab #explore .swiper-pagination",
    hide: false,
  },
  breakpoints: {
    1300: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
