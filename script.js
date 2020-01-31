var slides = document.getElementsByClassName("slide");

if (slides.length) {
  var slideShow = [];

  for (let i = 0; i < slides.length; i++) {
    slideShow.push({
      backgroundImage: slides[i].style.backgroundImage,
      currentSlide: false
    });
  }

  slideShow[0].currentSlide = true;
}

function updateCurrentSlide() {
  for (let i = 0; i < slides.length; i++) {
    if (slideShow[i].currentSlide) {
      slides[i].classList.toggle("current-slide");
    }
  }
}
updateCurrentSlide();

function nextSlide() {
  for (let i = 0; i < slides.length; i++) {
    if (slideShow[i].currentSlide === true) {
      slideShow[i].currentSlide = false;
      slides[i].classList.remove("current-slide");

      if (i === slides.length - 1) {
        slideShow[0].currentSlide = true;
				slides[0].classList.toggle("current-slide");
				break;
			} else {
        slideShow[i + 1].currentSlide = true;
				slides[i + 1].classList.toggle("current-slide");
				break;
			}
    }
  }
}

function previousSlide() {
  for (let i = 0; i < slides.length; i++) {
    if (slideShow[i].currentSlide === true) {
      slideShow[i].currentSlide = false;
      slides[i].classList.remove("current-slide");

      if (i === 0) {
        slideShow[slides.length - 1].currentSlide = true;
				slides[slides.length -1].classList.toggle("current-slide");
				break;
			} else {
        slideShow[i - 1].currentSlide = true;
				slides[i - 1].classList.toggle("current-slide");
				break;
			}
    }
  }
}
