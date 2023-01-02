/* TOGGLE BUTTON ACTIVE */

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarNav = document.querySelector('.navbar-nav');

const navbarToggleFunc = function () {
    navbarToggle.classList.toggle('active');
    navbarNav.classList.toggle('active');
}

navbarToggle.addEventListener('click', navbarToggleFunc);
