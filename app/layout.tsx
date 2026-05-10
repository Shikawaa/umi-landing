import type {Metadata} from 'next';
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';
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
  title: 'UMi - Co-créez la santé de demain',
  description: 'Application prescrite par les thérapeutes pour augmenter l\'adhésion thérapeutique.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${sourceSans.variable} ${sourceSerif.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans text-teal-105 bg-white antialiased">{children}</body>
    </html>
  );
}
