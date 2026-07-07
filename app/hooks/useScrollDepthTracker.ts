'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const THRESHOLDS = [25, 50, 75, 90] as const;

/**
 * Hook qui pousse un événement `scroll_depth` dans le dataLayer GTM
 * à chaque palier de scroll atteint (25%, 50%, 75%, 90%).
 *
 * - Chaque palier n'est poussé qu'une seule fois par page.
 * - Les paliers sont réinitialisés à chaque changement de route (navigation SPA).
 * - Le listener scroll utilise `passive: true` pour la performance.
 */
export function useScrollDepthTracker() {
  const pathname = usePathname();
  // useRef ici est safe : le reset se fait via le useEffect sur pathname,
  // pas besoin de survivre à un démontage Suspense (hook local à une page).
  const reachedThresholds = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Réinitialiser les paliers à chaque changement de route
    reachedThresholds.current = new Set();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (docHeight <= 0) return;

      const scrollPercent = (scrollTop / docHeight) * 100;

      for (const threshold of THRESHOLDS) {
        if (scrollPercent >= threshold && !reachedThresholds.current.has(threshold)) {
          reachedThresholds.current.add(threshold);

          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'scroll_depth',
            percent_scrolled: threshold,
            page_location: window.location.href,
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Vérifier immédiatement au cas où la page est déjà scrollée (ex: retour navigateur)
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return null;
}
