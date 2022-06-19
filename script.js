let slides = document.getElementsByClassName('slide');
let countSlides = document.getElementsByClassName('slide').length;
let currentSlides = 0;
window.addEventListener('keydown', function (e) {
	switch (e.code) {
		case 'ArrowRight':
			if (currentSlides < countSlides-1) {
				currentSlides++;
				updatePage();
			}
			break;
		case 'ArrowLeft':
			if (currentSlides > 0) {
				currentSlides--;
				updatePage();
			}
			break;
		}
})

function updatePage(){
	for (const iterator of slides) {
		if (iterator.classList.contains('active')) {
			iterator.classList.remove('active');
		}
		
	}
	slides[currentSlides].classList.add('active');
}