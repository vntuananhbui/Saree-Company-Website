$(document).ready(function() {
  var swiper = new Swiper('.mySwiper', {
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
    duration: 1000, // Set the duration of the fade transition in milliseconds
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    on: {
      init: function() {
        resetAnimation(this.slides);
        startAnimation(this.slides[this.activeIndex]);
      },
      slideChange: function() {
        resetAnimation(this.slides);
        startAnimation(this.slides[this.activeIndex]);
      }
    }
  });

  function resetAnimation(slides) {
    slides.forEach(function(slide) {
      var textElement = slide.querySelector('.text');
      textElement.style.animation = 'none';
      textElement.offsetHeight; // Trigger reflow to restart the animation
    });
  }

  function startAnimation(slide) {
    var textElement = slide.querySelector('.text');
    textElement.style.animation = '';
  }
});

