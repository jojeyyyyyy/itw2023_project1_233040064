// // Toggle & Responsive Navigation
// const navSlide = () => {
//     const nburger = document.querySelector(".burger");
//     const navLists = document.querySelector("nav")

// burger.addEventListener("click", () => {
//     navLists.classList.toggle("nav-active");
//     burger.classList.toggle("toggle-burger");
// });
// };

// navSlide();

// // Clear form before unload
// window.onbeforeunload = () => {
//     for (const form of document.getElementsByTagName("form")) {
        // form.reset();
//     }
// };

// Toogle class active
// const navbarNav = document.querySelector ('.navbar-nav')
// // Ketika hamburger menu diklik
// document.querySelector('#hamburger-menu').onclick = () => {
//     navbarNav.classList.toggle('active');
// };

//Klik diluar sidebar untuk menghilangkan nav
// const hamburger = document.querySelector('#hamburger-menu');

// document.addEventListener('click', function(e){
//     if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//         navbarNav.classList.remove('active');
//     }
// });


// Navbar
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});