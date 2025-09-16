// Handle Dropdowns

// Platform Dropdown
console.log('hello');
document.querySelector('.dropbtn').addEventListener('click', () => {
   document.querySelector('.dropdown').classList.toggle('show');
});

window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn')) {
        document.querySelector('.dropdown').classList.remove('show');
    }
});

// Solution Dropdown
document.querySelector('.dropbtn-sol').addEventListener('click', () => {
   document.querySelector('.dropdown-sol').classList.toggle('show');
});

window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn-sol')) {
        document.querySelector('.dropdown-sol').classList.remove('show');
    }
});

//resourses dropdown

document.querySelector('.dropbtn-res').addEventListener('click', () => {
   document.querySelector('.dropdown-res').classList.toggle('show');
});

window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn-res')) {
        document.querySelector('.dropdown-res').classList.remove('show');
    }
});





// Slidedown
const hamburger = document.querySelector('.hamburger');
const  navSlidedown = document.querySelector('.nav-slidedown');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navSlidedown.classList.toggle('open');
});




