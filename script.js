document.addEventListener("DOMContentLoaded", (event) => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation
    const heroTl = gsap.timeline();
    
    heroTl.to(".hero-title.animate-up", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    })
    .to(".hero-subtitle.animate-up", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .to(".hero-links.animate-up", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .to(".scroll-down.animate-up", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4")
    .fromTo(".hero-floating-badge", {
        scale: 0,
        opacity: 0,
        rotation: 0
    }, {
        scale: 1,
        opacity: 1,
        rotation: 5,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.8");

    // Floating animation for badge
    gsap.to(".hero-floating-badge", {
        y: -15,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });

    // Scroll Animations for elements with .animate-up class
    gsap.utils.toArray('.section-padding .animate-up, .companies .animate-up, .footer-content.animate-up').forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Staggered animation for achievement items
    gsap.utils.toArray('.achievement-item').forEach((item, i) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: ".achievement-list",
                start: "top 80%"
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.15,
            ease: "power2.out"
        });
    });

    // Staggered animation for portfolio cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: ".portfolio-grid",
                start: "top 80%"
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });

    // Smooth Scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
