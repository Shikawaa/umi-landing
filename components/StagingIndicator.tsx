'use client';

import { useEffect, useState } from 'react';

interface Props {
  serverEnv?: string;
}

export default function StagingIndicator({ serverEnv }: Props) {
  const [isStaging, setIsStaging] = useState(false);

  useEffect(() => {
    let staging = false;

    // 1. Check build environment (Netlify CONTEXT or custom APP_ENV)
    if (serverEnv && serverEnv !== 'production') {
      staging = true;
    } 
    // 2. Client-side fallback: check domain
    else if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      // Do not show on production domains
      if (host !== 'umi-psy.fr' && host !== 'www.umi-psy.fr') {
        staging = true;
      }
    }

    setIsStaging(staging);

    // Prefix document title if in staging
    if (staging) {
      if (document.title && !document.title.startsWith('STAGING ·')) {
        document.title = `STAGING · ${document.title}`;
      }
    }
  }, [serverEnv]);

  if (!isStaging) return null;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-md border border-amber-500 bg-amber-400 px-3 py-1.5 text-[13px] font-bold uppercase tracking-widest text-amber-950 shadow-sm font-sans">
      <div className="w-2 h-2 rounded-full bg-amber-950" />
      <span className="leading-none mt-[1px]">Staging</span>
    </div>
  );
}
