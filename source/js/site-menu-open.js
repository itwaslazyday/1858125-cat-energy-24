const navHeader = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-nav__toggle');

navHeader.classList.remove('header-nav--no-js');
console.log('JS загружен, класс &--no-js удален у блока навигации');
navHeader.classList.add('header-nav--closed');

navToggle.addEventListener('click', function() {
  if (navHeader.classList.contains('header-nav--closed')) {
    navHeader.classList.remove('header-nav--closed');
    navHeader.classList.add('header-nav--opened');
  }
  else
  {
    navHeader.classList.add('header-nav--closed');
    navHeader.classList.remove('header-nav--opened');
  }
});

navToggle.addEventListener('click', toggleClick);

function toggleClick() {
  window.addEventListener('click', windowClick);
};

function windowClick(event) {
  const target = event.target;
  if (!target.closest('.header-nav__toggle') && !target.closest('.header-nav__list')) {
    navHeader.classList.remove('header-nav--opened');
    navHeader.classList.add('header-nav--closed');
    window.removeEventListener('click', windowClick);
    console.log('Обработчик событий удален по клику вне области меню');
  }
};
