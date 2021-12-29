const navHeader = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-nav__toggle');

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

window.addEventListener('click', function(e) {
  const target = e.target;
  if (!target.closest('.header-nav__toggle') && !target.closest('.header-nav__list')) {
    navHeader.classList.remove('header-nav--opened');
    navHeader.classList.add('header-nav--closed');
  }
});
