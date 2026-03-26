import { useEffect } from 'react';

/**
 * Custom hook to handle scroll-reveal animations and skill bar animations.
 * Uses IntersectionObserver for performance.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // Animate skill bars inside this element
            const bars = entry.target.querySelectorAll('.skill-progress');
            bars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              if (width) {
                bar.style.width = width + '%';
              }
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
