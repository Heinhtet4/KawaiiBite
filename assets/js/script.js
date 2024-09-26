// Toggle Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

const clickToggle = () => navMenu.classList.add('show-menu');
const clickClose = () => navMenu.classList.remove('show-menu');
navToggle.addEventListener('click',clickToggle);
navClose.addEventListener('click',clickClose);

const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction))

// Scroll
const scrollHeader = () => {
    const header = document.getElementById('header');
    //When scroll is greater than 50 viewport height, add class
    window.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);

// SCROLLUP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);