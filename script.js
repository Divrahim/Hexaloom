// Preloader logic
const preloader = document.getElementById('preloader');
if (preloader) {
    const startTime = Date.now(); // Record the start time

    window.addEventListener('load', () => {
        const elapsedTime = Date.now() - startTime; // Calculate how long loading took
        const minimumTime = 2000; // 2 seconds
        const remainingTime = minimumTime - elapsedTime;

        const hidePreloader = () => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 750); // Match transition duration in CSS
        };

        if (remainingTime > 0) {
            setTimeout(hidePreloader, remainingTime);
        } else {
            hidePreloader();
        }
    });
}

// Initialize AOS
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
    });
}

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    });
}

// Mobile Menu
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const mobileMenu = document.getElementById('mobile-menu');

if (sidebarToggle && mobileMenu) {
    sidebarToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
    });
}

if (sidebarClose && mobileMenu) {
    sidebarClose.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
}

// Close mobile menu when a link is clicked
if (mobileMenu) {
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });
}

// Sticky Navbar
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// WhatsApp Form
const whatsappForm = document.getElementById('whatsapp-form');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const service = document.getElementById('service-select').value;
        const message = document.getElementById('message-input').value;
        const phoneNumber = '201020502434'; // Your WhatsApp number

        if (!service) {
            alert('Please select a service.');
            return;
        }

        const finalMessage = `Hello, I'm interested in the *${service}* service.\n\nMessage: ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

        window.open(whatsappUrl, '_blank');
    });
}

// Particles.js
if (document.getElementById('particles-js')) {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
}

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
