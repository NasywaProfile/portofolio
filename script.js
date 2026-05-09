document.addEventListener("DOMContentLoaded", (event) => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Navbar Animation (Framer-like sticky dropdown effect)
    gsap.from(".navbar", {
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        delay: 0.1
    });

    // Initial Hero Animation
    const heroTl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });
    
    // Framer style entrance (fade, slide up, and slight scale)
    gsap.set(".hero-title, .hero-subtitle, .hero-links", { opacity: 0, y: 50, scale: 0.98 });
    
    heroTl.to(".hero-title", {
        y: 0,
        opacity: 1,
        scale: 1,
    }, "+=0.2")
    .to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        scale: 1,
    }, "-=1.3")
    .to(".hero-links", {
        y: 0,
        opacity: 1,
        scale: 1,
    }, "-=1.3")
    .fromTo(".hero-floating-badge", {
        scale: 0.5,
        opacity: 0,
        rotation: -10
    }, {
        scale: 1,
        opacity: 1,
        rotation: 5,
        duration: 1.5,
        ease: "back.out(1.5)"
    }, "-=1.2");

    // Floating animation for badge (subtle hovering)
    gsap.to(".hero-floating-badge", {
        y: -10,
        rotation: 8,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });

    // Smooth reveal for sections
    gsap.utils.toArray('.section-header, .footer-content').forEach(element => {
        gsap.fromTo(element, 
            { opacity: 0, y: 40, scale: 0.98 },
            {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "expo.out"
            }
        );
    });

    // Staggered animation for tech stack logos
    gsap.fromTo(".company-logos .logo", 
        { y: 30, opacity: 0, scale: 0.9 },
        {
            scrollTrigger: {
                trigger: ".company-logos",
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.2)"
        }
    );

    // Staggered premium animation for portfolio cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        // Card entrance
        gsap.fromTo(card, 
            { opacity: 0, y: 60, scale: 0.96 },
            {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "expo.out",
                delay: i % 2 === 0 ? 0 : 0.15 // Slight delay for the second column
            }
        );

        // Framer-style subtle image scale down on scroll (Parallax)
        const img = card.querySelector('img');
        if(img) {
            gsap.fromTo(img, 
                { scale: 1.15 },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    },
                    scale: 1,
                    ease: "none"
                }
            );
        }
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
