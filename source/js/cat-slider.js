const buttonAfter = document.querySelector('.cat-slider__button--after');
const buttonBefore = document.querySelector('.cat-slider__button--before');
const catSlider = document.querySelector('.cat-slider');

buttonBefore.addEventListener('click', function() {
  catSlider.classList.remove('cat-slider--after');
}
);

buttonAfter.addEventListener('click', function() {
  catSlider.classList.add('cat-slider--after');
}
);

var pageWidth = document.body.clientWidth;
var tabletWidth = 768;

if (pageWidth >= tabletWidth) {
  var imgBefore = document.querySelector('.cat-slider__item--before');
  var imgAfter = document.querySelector('.cat-slider__item--after');
  var range = document.querySelector('.cat-slider__range');

  range.addEventListener('input', function() {
    imgBefore.style.width = (100 - range.value) + '%';
    imgAfter.style.width = range.value + '%';
  })

  buttonBefore.addEventListener('click', function () {
    imgBefore.style.width = '100%';
    imgAfter.style.width = '0%';
    range.value = 0;
  })

  buttonAfter.addEventListener('click', function () {
    imgBefore.style.width = '0%';
    imgAfter.style.width = '100%';
    range.value = 100;
  })
}
