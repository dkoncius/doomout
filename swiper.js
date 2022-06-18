const swiper1 = new Swiper('.features-swiper-1', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    spaceBetween: 1,
    autoplay: {
        delay: false,
        disableOnInteraction: false
      },
    speed: 50000
  });

const swiper2 = new Swiper('.features-swiper-2', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    spaceBetween: 1,
    autoplay: {
        delay: false,
        disableOnInteraction: false,
        reverseDirection: true
      },
    speed: 50000
  });

const swiper3 = new Swiper('.providers-swiper-3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 1,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
    speed: 300,
    breakpoints: {
      768: {
        slidesPerView: 3
      }
    }
  });

const swiper4 = new Swiper('.imagery-swiper-4', {
    // Optional parameters
    autoplay: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });

const swiper5 = new Swiper('.final-swiper-5', {
    // Optional parameters
    autoplay: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });