const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const btnPrev = document.querySelector('.carousel__btn--prev');
const btnNext = document.querySelector('.carousel__btn--next');

let index = 0;

function update() {
  const offset = -index * 100;
  track.style.transform = `translateX(${offset}%)`;
}

btnNext.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  update();
});

btnPrev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  update();
});