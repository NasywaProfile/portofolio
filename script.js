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

    // Project Detail Page Entrance Animation
    if (document.querySelector('.project-detail-page')) {
        const detailTl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });
        
        detailTl.to(".project-header", { y: 0, opacity: 1, delay: 0.1 })
                .to(".project-banner", { y: 0, opacity: 1 }, "-=0.9")
                .to(".project-content-grid", { y: 0, opacity: 1 }, "-=0.9");
    }

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

    // Stacking Card Effect for project cards
    const cards = gsap.utils.toArray('.project-card');
    const totalCards = cards.length;

    cards.forEach((card, i) => {
        // Set initial top offset per card to create stacking depth
        const topOffset = 80 + i * 18;
        gsap.set(card, { top: topOffset });

        // Scale down cards behind as new ones stack on top
        if (i < totalCards - 1) {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top " + topOffset + "px",
                    end: "+=400",
                    scrub: true,
                },
                scale: 1 - (totalCards - i - 1) * 0.04,
                ease: "none"
            });
        }

        // Parallax image inside each card
        const img = card.querySelector('img');
        if (img) {
            gsap.fromTo(img,
                { scale: 1.12 },
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

    // Contact section: slide-up reveal like a new page entering
    const footer = document.querySelector('.footer-dark');
    if (footer) {
        gsap.set(footer, { y: 80, opacity: 0, scale: 0.97 });
        gsap.to(footer, {
            scrollTrigger: {
                trigger: footer,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "expo.out"
        });

        // Stagger inner contact elements
        const contactInner = footer.querySelectorAll('.available-badge, h2, p, .btn-primary');
        gsap.set(contactInner, { y: 30, opacity: 0 });
        gsap.to(contactInner, {
            scrollTrigger: {
                trigger: footer,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.12,
            delay: 0.2
        });
    }

    // Floating animation for Contact Ornaments
    gsap.to(".ornament-1", {
        y: -25,
        x: 8,
        rotation: -20,
        duration: 3.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });
    gsap.to(".ornament-2", {
        y: 20,
        x: -10,
        rotation: 20,
        duration: 4.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 0.8
    });
    gsap.to(".ornament-3", {
        y: -18,
        x: 12,
        rotation: 15,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.5
    });
});
