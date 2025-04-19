
// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navigation background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Fade in animations
const fadeElements = document.querySelectorAll('.fade-in-left, .fade-in-right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    observer.observe(element);
});

// Mobile menu handling
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('#navbarNav');

navbarToggler.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbarNav.contains(e.target) && !navbarToggler.contains(e.target)) {
        navbarNav.classList.remove('show');
    }
});
