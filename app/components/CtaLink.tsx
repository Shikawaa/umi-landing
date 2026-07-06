'use client';

import Link from 'next/link';
import React from 'react';

interface CtaLinkProps {
  href: string;
  ctaLabel: string;
  eventPosition: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Wrapper client autour de <Link> qui pousse un événement
 * `umi_cta_clicked` dans le dataLayer GTM au clic.
 */
export default function CtaLink({
  href,
  ctaLabel,
  eventPosition,
  className,
  children,
}: CtaLinkProps) {
  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'umi_cta_clicked',
      cta_label: ctaLabel,
      event_position: eventPosition,
    });
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
