import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import PageViewTracker from './components/PageViewTracker';
import './globals.css'; // Global styles

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'UMi',
  description: 'Application prescrite par les thérapeutes pour augmenter l\'adhésion thérapeutique.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TD92R8S2');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans text-teal-105 bg-white antialiased">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TD92R8S2" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
