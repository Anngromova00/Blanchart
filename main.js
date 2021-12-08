document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 700,
    fadeEffect: {
      crossFade: false,
    },
    autoplay: {
      delay: 2500,
    },
  });
  const gallery = new Swiper(".gallery__slider", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
  });
});
