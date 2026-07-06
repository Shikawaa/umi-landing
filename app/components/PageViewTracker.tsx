'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Variable stockée hors du cycle de vie React pour survivre au <Suspense>
let globalLastSentUrl = '';

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
    const fullPageLocation = window.location.origin + url;

    if (globalLastSentUrl !== fullPageLocation) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view',
        page_location: fullPageLocation
      });

      globalLastSentUrl = fullPageLocation; // On met à jour la mémoire globale
    }
  }, [pathname, searchParams]);

  return null;
}
