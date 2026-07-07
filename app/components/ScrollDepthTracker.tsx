'use client';

import { useScrollDepthTracker } from '@/app/hooks/useScrollDepthTracker';

/**
 * Composant client invisible qui active le tracking de scroll depth via GTM.
 * À placer dans les pages où le suivi du scroll est souhaité.
 */
export default function ScrollDepthTracker() {
  useScrollDepthTracker();
  return null;
}
