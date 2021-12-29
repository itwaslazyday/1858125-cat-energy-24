const toggleAfter = document.querySelector('.cat-slider__button--after');
const toggleBefore = document.querySelector('.cat-slider__button--before');
const catSlider = document.querySelector('.cat-slider');

toggleBefore.addEventListener('click', function() {
  catSlider.classList.remove('cat-slider--after');
}
);

toggleAfter.addEventListener('click', function() {
  catSlider.classList.add('cat-slider--after');
}
);
