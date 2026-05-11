'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Remonter jusqu'à trouver un élément <a> (utile si on clique sur un span ou icône à l'intérieur)
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      // On intercepte uniquement les liens internes avec hash (ex: href="#constat")
      if (!href || !href.startsWith('#') || href === '#') return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) return;

      // On empêche le saut brutal natif
      e.preventDefault();

      const navbarHeight = 80; // Hauteur de la navbar (h-20 = 5rem = 80px)
      // Calcul précis pour atterrir juste en dessous de la navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      
      const duration = 1000; // 1 seconde pour correspondre à la douceur UMi
      let start: number | null = null;

      // Courbe d'accélération Ease In Out Quart : apaisante et organique
      const easeInOutQuart = (t: number) => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeInOutQuart(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return null;
}
