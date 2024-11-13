// script.js

// Change navigation bar background color on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = '#f43f5e';
    } else {
        header.style.background = 'transparent';
    }
});

// Smooth scroll to sections
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Dynamic hero text
const heroText = document.querySelector('.hero-content h2');
const quotes = [
    'Transform Your Life with FitLife Pro',
    'Your Health, Your Wealth, Your Priority',
    'A Stronger You, One Step at a Time'
];
let quoteIndex = 0;

setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    heroText.textContent = quotes[quoteIndex];
}, 3000);
