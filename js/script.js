document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.c-hamburger');
  const headNav = document.querySelector('.p-header__nav');


  if (!hamburger) {
    return false;
  }

  hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains("is-active")) {
      hamburger.classList.remove('is-active');
      headNav.classList.remove('is-active')
    } else {
      hamburger.classList.add('is-active');
      headNav.classList.add('is-active')
    }

  });

  headNav.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    headNav.classList.remove('is-active')
  });
});




document.addEventListener('DOMContentLoaded', function() {

  const acMenuItems = document.querySelectorAll('.p-nav__item--acMenu');

  acMenuItems.forEach(item => {

    item.addEventListener('click', function(event) {

      event.stopPropagation();

      item.classList.toggle('is-open');
    });
  });

  document.addEventListener('click', function(event) {

    acMenuItems.forEach(item => {

      if (!item.contains(event.target)) {
        item.classList.remove('is-open');
      }
    });
  });
});