document.addEventListener('DOMContentLoaded', (event) => {
  const hamburgerBtn = document.querySelector('.navbar__burger');
  const navbarList = document.querySelector('.navbar__list');

  hamburgerBtn.addEventListener('mouseover', (event) => {
    event.preventDefault();
    navbarList.classList.add('active');
    hamburgerBtn.classList.add('active');
  });

  hamburgerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (hamburgerBtn.classList.contains('active')) {
      navbarList.classList.remove('active');
      hamburgerBtn.classList.remove('active');
    }
  });
});