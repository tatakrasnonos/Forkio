const hamburgerBtn = document.querySelector('.navbar__burger');
const navbarList = document.querySelector('.navbar__list');

hamburgerBtn.addEventListener('click', () => {
  navbarList.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
});