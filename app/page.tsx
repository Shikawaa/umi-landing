import { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'UMi',
  description: "UMi prolonge votre travail clinique grâce à une application mobile d'exercices TCC contextualisés par IA, prescrite à vos patients et hébergée sur infrastructure certifiée HDS.",
  openGraph: {
    title: 'UMi',
    description: "Application prescrite par les thérapeutes pour augmenter l'adhésion thérapeutique.",
    siteName: 'UMi',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Home() {
  return <HomeContent />;
}
