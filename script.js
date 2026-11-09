// animate the homepage when it loads
window.addEventListener("load", function() {

    const title = document.querySelector(".hero h1");
    const description = document.querySelector(".hero-bottom");

    title.animate(
        [
            { opacity: 0, transform: "translateY(50px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            duration: 1100,
            easing: "ease-out",
            fill: "both"
        }
    );

    description.animate(
        [
            { opacity: 0, transform: "translateY(25px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            duration: 1000,
            delay: 400,
            easing: "ease-out",
            fill: "both"
        }
    );

});

// sticky navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// highlight current section in navigation
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                navLinks.forEach(function(link) {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    'nav a[href="#' + entry.target.id + '"]'
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
    }
);

sections.forEach(function(section) {
    observer.observe(section);
});

// back to top button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }

});

// =============================
// HOMEPAGE BACKGROUND SLIDESHOW
// =============================

const heroSlides = document.querySelectorAll(".hero-slide");
const slideIndicators = document.querySelectorAll(".indicator");

let currentSlide = 0;

function changeHeroSlide() {

    // remove active state
    heroSlides[currentSlide].classList.remove("active");
    slideIndicators[currentSlide].classList.remove("active");

    // move to next slide
    currentSlide = (currentSlide + 1) % heroSlides.length;

    // activate next slide
    heroSlides[currentSlide].classList.add("active");
    slideIndicators[currentSlide].classList.add("active");

}

// change images every 6 seconds
if (heroSlides.length > 1 &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

    setInterval(changeHeroSlide, 6000);

}