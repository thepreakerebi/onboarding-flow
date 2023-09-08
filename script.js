const firstSlide = document.querySelector('#first-slide');
const secondSlide = document.querySelector('#second-slide');
const thirdSlide = document.querySelector('#third-slide');
const forwardBtn = document.querySelector('#forward');
const backwardBtn = document.querySelector('#backward');
const slideContainer = document.querySelector('#infos');


const slides = [firstSlide, secondSlide, thirdSlide];

forwardBtn.addEventListener('click', e => {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('show-slide')) {
            slides[i].style.display = 'none'
            slides[i].classList.remove('show-slide')
            const nextSlide = slides[slides.indexOf(slides[i]) + 1];
            nextSlide.style.display = 'flex';
            nextSlide.classList.add('show-slide');
            backwardBtn.style.visibility = 'visible';
            if (nextSlide === thirdSlide) {
                forwardBtn.style.visibility = 'hidden';
            }
            if (nextSlide.classList.contains('show-slide')) {
                break;
            }
        }
    }
})

backwardBtn.addEventListener('click', e => {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('show-slide')) {
            slides[i].style.display = 'none'
            slides[i].classList.remove('show-slide')
            const nextSlide = slides[slides.indexOf(slides[i]) - 1];
            nextSlide.style.display = 'flex';
            nextSlide.classList.add('show-slide');
            forwardBtn.style.visibility = 'visible';
            if (nextSlide === firstSlide) {
                backwardBtn.style.visibility = 'hidden';
            }
            if (nextSlide.classList.contains('show-slide')) {
                break;
            }
        }
    }
})