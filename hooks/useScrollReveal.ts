import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to elements with .reveal, .reveal-left,
 * .reveal-right, .reveal-scale classes and adds .visible when in viewport.
 * Call once per page/component that contains reveal elements.
 */
export const useScrollReveal = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
};

export default useScrollReveal;
