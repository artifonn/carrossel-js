let totalSlides = document.querySelectorAll('.slider--item').length;
currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

const goPrev = () => {
  currentSlide--;
  if(currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMagin();
};

const goNext = () => {
  currentSlide++;
  if(currentSlide > (totalSlides - 1)) {
    currentSlide = 0;
  }
  updateMagin();
};

const updateMagin = () => {
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
  let newMargin = (currentSlide * document.body.clientWidth);
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000);