document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .section-title');
    
    animatedElements.forEach(element => {
        observer.observe(element);
        element.classList.add('fade-in');
    });

    // Hero section animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroImage = document.querySelector('.hero-image');

    heroTitle.classList.add('slide-in-left');
    heroSubtitle.classList.add('slide-in-left', 'delay-1');
    heroDescription.classList.add('slide-in-left', 'delay-2');
    heroButtons.classList.add('slide-in-left', 'delay-3');
    heroImage.classList.add('slide-in-right', 'delay-1');
});