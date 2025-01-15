// -/-/-/-/-/-/-/-/-/-/--Swiper Script---/-/-/-/-/-/-/-/-/-/-/

var swiper = new Swiper("#courses-container .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
    },
});