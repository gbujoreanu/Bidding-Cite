// script.js

// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

// Toggle Filter Menu (Projects Page)
function toggleFilterMenu() {
    const filterMenu = document.getElementById('filter-menu');
    filterMenu.classList.toggle('show');
}

// Save Project Function (Placeholder)
function saveProject() {
    alert('Project saved!');
}

/* Carousel Functionality */
let slideIndex = 0;
showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide img');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transform = `translateX(-${slideIndex * 100}%)`;
}