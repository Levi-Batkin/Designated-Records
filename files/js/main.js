/**
 * Designated Records - Interactive Enhancements
 */

(function() {
    'use strict';
    
    // Navbar scroll effect
    function handleNavbarScroll() {
        const navbar = document.querySelector('.navbar-custom');
        if (!navbar) return;
        
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Smooth scroll for anchor links
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offset = 80; // Account for fixed navbar
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Animate elements on scroll
    function setupScrollAnimation() {
        // Check if IntersectionObserver is supported
        if (!('IntersectionObserver' in window)) {
            // Fallback: just add the animation class to all elements
            document.querySelectorAll('.release-card, .artist-card, .contact-form, .company-info-card').forEach(el => {
                el.classList.add('animate-fade-in');
            });
            return;
        }
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.release-card, .artist-card, .contact-form, .company-info-card').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Form validation and submission
    function setupContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const mailtoLink = `mailto:contact@designatedrecords.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
            
            window.location.href = mailtoLink;
        });
    }
    
    // Close mobile menu when clicking a link (Bootstrap 5 integration)
    function setupMobileMenu() {
        // Close mobile menu when clicking a nav link
        document.querySelectorAll('.navbar-collapse .nav-link-custom').forEach(link => {
            link.addEventListener('click', function() {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                
                // Try to use Bootstrap 5's Collapse API if available
                if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                } else if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    // Fallback for when Bootstrap isn't loaded
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
    
    // Initialize all functionality when DOM is ready
    function init() {
        // Setup scroll effects
        window.addEventListener('scroll', handleNavbarScroll);
        handleNavbarScroll(); // Check initial state
        
        // Setup smooth scrolling
        setupSmoothScroll();
        
        // Setup scroll animations
        setupScrollAnimation();
        
        // Setup contact form
        setupContactForm();
        
        // Setup mobile menu
        setupMobileMenu();
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
