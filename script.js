document.addEventListener("DOMContentLoaded", function() {
    // Elements to observe for scroll animation
    const elements = document.querySelectorAll(".feature, .hero-content, .step, footer");

    // Intersection Observer to detect when elements are in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        });
    }, { threshold: 0.5 });

    // Observe each element for scrolling animation
    elements.forEach(element => observer.observe(element));

    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function changeSlide() {
        slides[currentIndex].style.opacity = '0'; // Hide the current slide
        currentIndex = (currentIndex + 1) % slides.length; // Move to next slide
        slides[currentIndex].style.opacity = '1'; // Show the next slide
    }

    // Initial state for slideshow
    slides.forEach((slide, index) => {
        slide.style.opacity = index === 0 ? '1' : '0';
    });

    // Change slide every 5 seconds
    setInterval(changeSlide, 5000);
});