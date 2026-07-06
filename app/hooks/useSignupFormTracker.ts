'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

// Variable hors du cycle de vie React pour éviter les doublons
// (survit aux re-montages Suspense / Strict Mode)
let lastSignupOpenedUrl = '';

/**
 * Hook qui pousse un événement `signup_opened` dans le dataLayer GTM
 * à chaque arrivée sur la page du formulaire, y compris en navigation SPA.
 *
 * - Se re-déclenche à chaque changement de pathname (navigation client-side)
 * - Déduplique via une variable globale (pas de double push pour la même URL)
 *
 * @param formName - Nom du formulaire pour GTM (défaut: 'inscription_umi')
 */
export function useSignupFormTracker(formName: string = 'inscription_umi') {
  const pathname = usePathname();

  useEffect(() => {
    const currentUrl = window.location.href;

    if (lastSignupOpenedUrl !== currentUrl) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'signup_opened',
        page_location: currentUrl,
        form_name: formName,
      });

      lastSignupOpenedUrl = currentUrl;
    }
  }, [pathname, formName]);
}
