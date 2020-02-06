function nextSlide(slideNumber) {
	let slides = document.getElementsByClassName('slide' + slideNumber);

	for (let i = 0; i < slides.length; i++) {
		if (slides[i].classList.contains('current-slide')) {
			document.getElementsByClassName('slide' + slideNumber + '-button')[0].disabled = true;
			document.getElementsByClassName('slide' + slideNumber + '-button')[1].disabled = true;

			if (i === slides.length - 1) {
				slides[0].style.zIndex = '200';
				slides[0].classList.toggle('next-slide');

				setTimeout(function () {
					slides[0].classList.remove('next-slide');
					slides[0].classList.toggle('current-slide');
					slides[slides.length - 1].classList.remove('current-slide');
					slides[0].style.zIndex = 'auto';

					document.getElementsByClassName('slide' + slideNumber + '-button')[0].disabled = false;
					document.getElementsByClassName('slide' + slideNumber + '-button')[1].disabled = false;
				}, 1000);

				break;
			} else {
				slides[i + 1].style.zIndex = '200';
				slides[i + 1].classList.toggle('next-slide');

				setTimeout(function () {
					slides[i + 1].classList.remove('next-slide');
					slides[i + 1].classList.toggle('current-slide');
					slides[i].classList.remove('current-slide');
					slides[i + 1].style.zIndex = 'auto';

					document.getElementsByClassName('slide' + slideNumber + '-button')[0].disabled = false;
					document.getElementsByClassName('slide' + slideNumber + '-button')[1].disabled = false;
				}, 1000);

				break;
			}
		}
	}
}

function previousSlide(slideNumber) {
	let slides = document.getElementsByClassName('slide' + slideNumber);

	for (let i = 0; i < slides.length; i++) {
		if (slides[i].classList.contains('current-slide')) {
			document.getElementsByClassName('slide' + slideNumber + '-button')[0].disabled = true;
			document.getElementsByClassName('slide' + slideNumber + '-button')[1].disabled = true;

			if (i === 0) {
				slides[slides.length - 1].style.zIndex = '200';
				slides[slides.length - 1].classList.toggle('previous-slide');

				setTimeout(function () {
					slides[slides.length - 1].classList.remove('previous-slide');
					slides[slides.length - 1].classList.toggle('current-slide');
					slides[0].classList.remove('current-slide');
					slides[slides.length - 1].style.zIndex = 'auto';

					document.getElementsByClassName('slide' + slideNumber + '-button')[0].disabled = false;
					document.getElementsByClassName('slide' + slideNumber + '-button')[1].disabled = false;
				}, 1000);

				break;
			} else {
				slides[i - 1].style.zIndex = '200';
				slides[i - 1].classList.toggle('previous-slide');

				setTimeout(function () {
					slides[i - 1].classList.remove('previous-slide');
					slides[i - 1].classList.toggle('current-slide');
					slides[i].classList.remove('current-slide');
					slides[i - 1].style.zIndex = 'auto';
					
					document.getElementsByClassName('slide' + slideNumber + '-button')[0].disabled = false;
					document.getElementsByClassName('slide' + slideNumber + '-button')[1].disabled = false;
				}, 1000);

				break;
			}
		}
	}
}
