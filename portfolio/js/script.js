// Initialize Bootstrap tooltips
// Initialize Icons
lucide.createIcons();

// Navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');
const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            bsCollapse.toggle();
        }
    });
});
