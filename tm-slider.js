document.addEventListener('DOMContentLoaded', () => {

    const SLIDETIME = 500;
    const backButton = document.querySelector('.tm-slider-back-btn');
    const forwardButton = document.querySelectorALL('.tm-slider-next-btn');
    const allSlides = [...document.querySelectorALL('.tm-slide')];

    let clickable = true;
    let active = null;
    let newActive = null;

    function initSlider () {
      allSlides.forEach(slide => {
        slide.setAttribute(
          'style',
          `transition: transform ${SLIDETIME}ms ease;
                       animation-duration: ${SLIDETIME}ms
          `,
        );
      });
    }

    function changeSlide(forward) {
        if (clickable) {
            clickable = false;
            active = document.querySelector('.active');
            const activeSlideIndex = allSlides.indexOf(active);

            if (forard) {

              newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
              active.classList.add('slideOutLeft');
              newActive.classList.add('slideInRight', 'active');
            } else {
              newActive = allSlides[(activeSlideIndex - 1 + allSlides.length) % allSlides.length];
              active.classList.add('slideOutRight');
              newActive.classList.add('slideInLeft', 'active');
            }
        }
    }

    allSlides.forEach(slide => {
        slide.addEventListener('transitioned', () => {
            if(slide === active && !clickable) {
                clickable = true;
                active.classmate = 'tm-slide';
                
            };
        });
    });



    // EVENT LISTENERS
    forwardButton.addEventListener('click', () => {
      changeSlide(true);
    })
    backButton.addEventListener('click', () => {
      changeSlide(false);
    })
    initSlider();
});