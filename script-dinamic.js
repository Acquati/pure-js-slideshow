var slides = document.getElementsByClassName('slide');

if (slides.length) {
  var slideShow = [];

  for (let i = 0; i < slides.length; i++) {
    slideShow.push({
      backgroundImage: slides[i].style.backgroundImage,
      currentSlide: false
    });
  }

  slideShow[0].currentSlide = true;
  slides[0].classList.toggle('current-slide');
}

var bleu = document.getElementsByClassName('slide');

function nextSlide() {
  for (let i = 0; i < slides.length; i++) {
    if (slideShow[i].currentSlide === true) {
      slideShow[i].currentSlide = false;
      document.getElementsByClassName('w3-button')[0].disabled = true;
      document.getElementsByClassName('w3-button')[1].disabled = true;

      if (!slides[i].classList.contains('current-slide')) {
        slides[i].classList.toggle('current-slide');
      }

      if (i === slides.length - 1) {
        slideShow[0].currentSlide = true;
        slides[0].classList.toggle('next-slide');
        slides[0].style.zIndex = '200';

        setTimeout(function () {
          slides[0].classList.remove('next-slide');
          slides[0].classList.toggle('current-slide');
        }, 0);

        setTimeout(function () {
          slides[slides.length - 1].classList.remove('current-slide');
          slides[0].style.zIndex = 'auto';
          document.getElementsByClassName('w3-button')[0].disabled = false;
          document.getElementsByClassName('w3-button')[1].disabled = false;
        }, 1000);

        break;
      } else {
        slideShow[i + 1].currentSlide = true;
        slides[i + 1].classList.toggle('next-slide');
        slides[i + 1].style.zIndex = '200';

        setTimeout(function () {
          slides[i + 1].classList.remove('next-slide');
          slides[i + 1].classList.toggle('current-slide');
        }, 0);

        setTimeout(function () {
          slides[i].classList.remove('current-slide');
          slides[i + 1].style.zIndex = 'auto';
          document.getElementsByClassName('w3-button')[0].disabled = false;
          document.getElementsByClassName('w3-button')[1].disabled = false;
        }, 1000);

        break;
      }
    }
  }
}

function previousSlide() {
  for (let i = 0; i < slides.length; i++) {
    if (slideShow[i].currentSlide === true) {
      slideShow[i].currentSlide = false;
      document.getElementsByClassName('w3-button')[0].disabled = true;
      document.getElementsByClassName('w3-button')[1].disabled = true;

      if (!slides[i].classList.contains('current-slide')) {
        slides[i].classList.toggle('current-slide');
      }

      if (i === 0) {
        slideShow[slides.length - 1].currentSlide = true;
        slides[slides.length - 1].classList.toggle('previous-slide');
        slides[slides.length - 1].style.zIndex = '200';

        setTimeout(function () {
          slides[slides.length - 1].classList.remove('previous-slide');
          slides[slides.length - 1].classList.toggle('current-slide');
        }, 0);

        setTimeout(function () {
          slides[0].classList.remove('current-slide');
          slides[slides.length - 1].style.zIndex = 'auto';
          document.getElementsByClassName('w3-button')[0].disabled = false;
          document.getElementsByClassName('w3-button')[1].disabled = false;
        }, 1000);

        break;
      } else {
        slideShow[i - 1].currentSlide = true;
        slides[i - 1].classList.toggle('previous-slide');
        slides[i - 1].style.zIndex = '200';

        setTimeout(function () {
          slides[i - 1].classList.remove('previous-slide');
          slides[i - 1].classList.toggle('current-slide');
        }, 0);

        setTimeout(function () {
          slides[i].classList.remove('current-slide');
          slides[i - 1].style.zIndex = 'auto';
          document.getElementsByClassName('w3-button')[0].disabled = false;
          document.getElementsByClassName('w3-button')[1].disabled = false;
        }, 1000);

        break;
      }
    }
  }
}
