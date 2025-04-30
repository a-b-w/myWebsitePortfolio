// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Swiper carousel
const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Show/hide collapsible sections on nav click
const links = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('.collapsible');

links.forEach(link => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    sections.forEach(section => {
      if (section !== target) section.style.display = 'none';
    });
    if (target) target.style.display = 'block';
  });
});

// Reveal the "about" section by default
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#about').style.display = 'block';
});