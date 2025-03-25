/**
 * GOLDBAR LIMITED - Pitch Deck JavaScript
 * 
 * This script adds enhanced interactions, animations,
 * and controls to the pitch deck presentation.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components once DOM is fully loaded
    initializeAnimations();
    initializeScrollEffects();
    setupInteractions();
});

/**
 * Initialize advanced SVG animations
 * - Controls movement of paths and circles
 * - Adds parallax effects to SVG elements
 */
function initializeAnimations() {
    // Get SVG element references
    const svgPaths = document.querySelectorAll('.animated-path');
    const svgCircles = document.querySelectorAll('.floating-circle');
    
    // Apply random variation to animation properties for more organic movement
    svgPaths.forEach(path => {
        // Create slight variations in animation duration (30s ± 5s)
        const randomDuration = 25 + Math.random() * 10;
        path.style.animationDuration = `${randomDuration}s`;
    });
    
    svgCircles.forEach(circle => {
        // Create slight variations in animation duration (20s ± 8s)
        const randomDuration = 16 + Math.random() * 8;
        circle.style.animationDuration = `${randomDuration}s`;
    });
}

/**
 * Initialize scroll-based effects
 * - Adds parallax and reveal effects
 * - Manages slide transitions
 */
function initializeScrollEffects() {
    const slides = document.querySelectorAll('.slide');
    const glowElements = document.querySelectorAll('.glow');
    
    // Capture scroll position for parallax effects
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Apply subtle parallax to glow elements
        glowElements.forEach((glow, index) => {
            const slideOffset = glow.closest('.slide').offsetTop;
            const relativeScroll = scrollY - slideOffset;
            
            // Apply subtle vertical shift based on scroll position
            if (relativeScroll > -window.innerHeight && relativeScroll < window.innerHeight) {
                const parallaxValue = relativeScroll * 0.05; // Adjust multiplier for effect intensity
                glow.style.transform = `translateY(${parallaxValue}px)`;
            }
        });
        
        // Add active class to visible slides for potential reveal animations
        slides.forEach(slide => {
            const slideRect = slide.getBoundingClientRect();
            const slideVisible = (
                slideRect.top < window.innerHeight * 0.75 && 
                slideRect.bottom > window.innerHeight * 0.25
            );
            
            if (slideVisible) {
                slide.classList.add('slide-active');
            } else {
                slide.classList.remove('slide-active');
            }
        });
    });
}

/**
 * Set up interactive elements
 * - Enhance hover states
 * - Add potential click handlers
 */
function setupInteractions() {
    // Get references to interactive elements
    const highlightBoxes = document.querySelectorAll('.highlight-box');
    const goldButtons = document.querySelectorAll('.gold-btn');
    
    // Add subtle glow effect on highlight box hover
    highlightBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            // Intensify the border glow on hover
            box.style.borderLeftColor = 'var(--gold-secondary)';
        });
        
        box.addEventListener('mouseleave', () => {
            // Restore original state on mouse leave
            box.style.borderLeftColor = 'var(--gold-primary)';
        });
    });
    
    // Add click-to-scroll functionality for navigation buttons (if needed)
    goldButtons.forEach(button => {
        if (button.getAttribute('href') && button.getAttribute('href').startsWith('#')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = button.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
}

/**
 * Future expansion potential:
 * - Full presentation controls (next/prev slide)
 * - Slide transition effects
 * - Interactive data visualizations
 * - Image gallery functionality
 * - Form submission for contact section
 */