import { Metadata } from 'next';
import { ArrowRight, ChevronRight, Lock, Users, HeartCrack, FileText, History } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CtaLink from '@/app/components/CtaLink';
import OnboardingStepper from '@/components/OnboardingStepper';
import FaqAccordion from '@/components/FaqAccordion';
import ScrollToTopLink from '@/components/ScrollToTopLink';
import SmoothScroll from '@/components/SmoothScroll';

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
  return (
    <main className="relative min-h-screen flex flex-col overflow-clip bg-[#fafafa] selection:bg-teal-52/20 font-sans">
      <SmoothScroll />
      {/* Visual Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-5 opacity-40 lg:opacity-20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-52 opacity-10 lg:opacity-5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 h-20 bg-[#fafafa]/80 backdrop-blur-md border-b border-teal-52/10 shadow-[0_4px_20px_-10px_rgba(47,176,161,0.1)]">
        <div className="relative max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-16">
          <ScrollToTopLink className="flex items-center gap-2.5 cursor-pointer z-10">
            <Image
              src="/logo_umi.png"
              alt="UMi Logo"
              width={36}
              height={36}
              priority
              className="shrink-0 drop-shadow-sm object-contain"
            />
            <span className="font-serif font-bold text-2xl text-teal-105 tracking-tight">UMi</span>
          </ScrollToTopLink>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            <a href="#constat" className="font-sans text-teal-82 font-medium hover:text-[#2fb0a1] transition-colors">Le constat</a>
            <a href="#fonctionnement" className="font-sans text-teal-82 font-medium hover:text-[#2fb0a1] transition-colors">Fonctionnement</a>
            <a href="#mise-en-place" className="font-sans text-teal-82 font-medium hover:text-[#2fb0a1] transition-colors">Mise en place</a>
            <a href="#blog" className="font-sans text-teal-82 font-medium hover:text-[#2fb0a1] transition-colors">Blog</a>
            <a href="#faq" className="font-sans text-teal-82 font-medium hover:text-[#2fb0a1] transition-colors">FAQ</a>
          </div>

          <div className="flex items-center z-10">
            <CtaLink href="/contact" ctaLabel="Rejoindre UMi" eventPosition="navbar" className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-teal-52 text-white font-sans font-bold hover:bg-teal-82 transition-all hover:opacity-90 shadow-md shadow-teal-52/20 text-[14px]">
              Rejoindre UMi
            </CtaLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full px-6 lg:px-0 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] pt-24">

        {/* Left Column: Text & CTA */}
        <div className="w-full lg:w-1/2 p-0 py-12 lg:p-16 flex flex-col justify-center items-start space-y-8 z-10">

          <div className="space-y-4 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-5 text-teal-90 text-[13px] font-semibold tracking-wide">
              <span>✨ Aidez-nous à co-créer le futur de la santé</span>
            </div>

            {/* Heading */}
            <h1 className="font-serif font-bold text-4xl lg:text-[48px] text-teal-105 leading-[1.1]">
              Renforcez l&apos;adhésion thérapeutique de vos patients entre les séances
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-teal-82 text-lg lg:text-[18px] leading-relaxed max-w-[420px]">
              UMi prolonge votre travail clinique grâce à une application mobile d&apos;exercices TCC contextualisés par IA, prescrite à vos patients et hébergée sur infrastructure certifiée HDS.
            </p>
          </div>

          {/* Call to Actions Area */}
          <div className="flex flex-col space-y-4 w-full">
            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <CtaLink href="/contact" ctaLabel="Aider à co-créer UMi" eventPosition="hero" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-teal-52 text-white font-bold transition-all hover:opacity-90 shadow-lg shadow-teal-52/30">
                Aider à co-créer UMi <ArrowRight className="w-5 h-5 opacity-90" />
              </CtaLink>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-transparent text-teal-52 font-bold transition-all hover:bg-teal-5">
                Découvrir l&apos;application <ChevronRight className="w-5 h-5 opacity-90" />
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-2 gap-y-1 text-[13px] pt-2 text-teal-82/80 font-medium">
              <div className="flex items-center gap-1.5">
                <span>🤝 Accès gratuit pendant la phase de test</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="w-full lg:w-1/2 flex justify-center lg:items-center py-12 lg:min-h-[calc(100vh-80px)] relative">
          {/* Card framing the mockup */}
          <div className="relative w-full max-w-[640px] h-[520px] lg:h-[640px] bg-teal-5 rounded-2xl overflow-hidden flex justify-center items-start pt-24 lg:pt-32">

            {/* Mockup Container */}
            <div className="relative w-[280px] sm:w-[320px] h-[600px] sm:h-[680px] z-10 drop-shadow-[0_-8px_32px_rgba(1,26,23,0.15)]">
              <Image
                src="/mockup-homepage.png"
                alt="UMi Application Mockup"
                fill
                priority
                quality={90}
                sizes="(max-width: 640px) 280px, 320px"
                className="object-contain object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

      </section>

      {/* Le Constat Section */}
      <section id="constat" className="w-full bg-[#f4f6f6] py-24 lg:py-28 relative z-10 border-t border-teal-52/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mb-14 lg:mb-16 space-y-4">
            <span className="font-sans font-bold text-teal-52 uppercase tracking-widest text-sm">
              LE CONSTAT
            </span>
            <h2 className="font-serif font-bold text-3xl lg:text-[40px] text-teal-105 leading-tight">
              Ce que les psys TCC vivent au quotidien
            </h2>
          </div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full bg-[#fafafa] rounded-3xl overflow-hidden shadow-none border-2 border-gray-100 divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-100">

            {/* Card 1 */}
            <div className="flex flex-col items-start p-6 lg:p-8 h-full">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#2fb0a1]/15 text-[#011a17] mb-6">
                <HeartCrack className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="pr-6 lg:pr-12 xl:pr-16">
                <h3 className="font-serif font-semibold text-[22px] text-[#011a17] mb-3 leading-snug">
                  Le défi de l&apos;observance
                </h3>
                <p className="font-sans text-[15px] lg:text-[16px] text-[#1b544b] leading-relaxed">
                  Entre deux rendez-vous, la motivation du patient peut diminuer. Sans soutien structuré, près de 25 % des suivis s&apos;interrompent prématurément, limitant l&apos;impact de votre travail clinique.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start p-6 lg:p-8 h-full">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#2fb0a1]/15 text-[#011a17] mb-6">
                <FileText className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="pr-6 lg:pr-12 xl:pr-16">
                <h3 className="font-serif font-semibold text-[22px] text-[#011a17] mb-3 leading-snug">
                  Le manque de supports dédiés
                </h3>
                <p className="font-sans text-[15px] lg:text-[16px] text-[#1b544b] leading-relaxed">
                  Faute d&apos;outils professionnels, le suivi repose souvent sur des supports dispersés (PDF, papier). Il est difficile d&apos;individualiser ces exercices sans alourdir considérablement votre gestion quotidienne.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start p-6 lg:p-8 h-full">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#2fb0a1]/15 text-[#011a17] mb-6">
                <History className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="pr-6 lg:pr-12 xl:pr-16">
                <h3 className="font-serif font-semibold text-[22px] text-[#011a17] mb-3 leading-snug">
                  La perte de temps clinique
                </h3>
                <p className="font-sans text-[15px] lg:text-[16px] text-[#1b544b] leading-relaxed">
                  Reconstituer le contexte de la semaine écoulée consomme de précieuses minutes à chaque début de séance. Cette visibilité manquante freine la fluidité du travail thérapeutique.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fonctionnement Section */}
      <section id="fonctionnement" className="w-full bg-[#fafafa] py-24 lg:py-32 relative z-10 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mb-20 space-y-4 lg:space-y-6">
            <span className="font-sans font-bold text-teal-52 uppercase tracking-widest text-sm">
              UMI
            </span>
            <h2 className="font-serif font-bold text-3xl lg:text-[40px] text-[#011a17] leading-tight">
              Une double interface conçue pour l&apos;alliance thérapeutique.
            </h2>
            <p className="font-sans text-[18px] lg:text-[20px] text-[#23685e] leading-relaxed">
              UMi connecte le travail inter-séances de vos patients à votre pratique clinique, sans jamais l&apos;alourdir.
            </p>
          </div>

          <div className="flex flex-col w-full gap-24 lg:gap-32">
            {/* Block 1: Patient (Text Left, Visual Right) */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Text Left */}
              <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                <h3 className="font-serif font-bold text-[28px] lg:text-[32px] text-[#011a17] leading-snug">
                  Un prolongement sécurisé de votre cabinet.
                </h3>
                <p className="font-sans text-[17px] lg:text-[18px] text-[#1b544b] leading-relaxed">
                  Vos patients bénéficient d&apos;un espace bienveillant pour maintenir le cap entre deux rendez-vous. Guidés par notre IA, ils structurent leurs pensées et mettent en pratique vos recommandations.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Mood-tracking et Check-in émotionnel régulier.",
                    "Journaling augmenté par une IA hébergée sur serveurs HDS.",
                    "Exercices TCC ciblés, contextualisés selon l'état du patient."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#e5fbf7] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#2fb0a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-sans text-[16px] lg:text-[17px] text-[#1b544b] leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Right */}
              <div className="w-full lg:w-1/2 flex justify-center">
                {/* Reusing the same mockup visual style from Hero */}
                <div className="relative w-full max-w-[560px] h-[460px] lg:h-[540px] bg-[#e5fbf7] rounded-2xl overflow-hidden flex justify-center items-start pt-16 lg:pt-20">
                  <div className="relative w-[280px] sm:w-[320px] h-[600px] z-10 drop-shadow-[0_-8px_32px_rgba(1,26,23,0.15)]">
                    <Image
                      src="/mockup-exercice.png"
                      alt="UMi Application Mockup"
                      fill
                      quality={90}
                      sizes="(max-width: 640px) 280px, 320px"
                      className="object-contain object-top"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Therapist (Visual Left, Text Right) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              {/* Text Right */}
              <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                <h3 className="font-serif font-bold text-[28px] lg:text-[32px] text-[#011a17] leading-snug">
                  Gardez le fil, gagnez du temps clinique.
                </h3>
                <p className="font-sans text-[17px] lg:text-[18px] text-[#1b544b] leading-relaxed">
                  L&apos;interface psy est volontairement minimale. Elle s&apos;intègre à votre quotidien pour vous donner la bonne information au bon moment, sans vous noyer sous les données.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Gestion simple de la patientèle par code d'invitation.",
                    "Suivi du statut et des exercices réalisés entre les séances.",
                    "Alertes immédiates en cas de signaux critiques détectés."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#e5fbf7] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#2fb0a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-sans text-[16px] lg:text-[17px] text-[#1b544b] leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Left */}
              <div className="w-full lg:w-1/2 flex justify-center">
                {/* Visual Representation of Dashboard */}
                <div className="relative w-full max-w-[560px] aspect-[4/3] bg-white rounded-2xl border border-gray-100 p-6 flex flex-col space-y-6 overflow-hidden">
                  {/* Simulated Header */}
                  <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#e5fbf7] text-[#2fb0a1] flex items-center justify-center font-bold font-serif text-sm">Dr</div>
                      <div className="w-32 h-4 bg-gray-100 rounded-full" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-50" />
                      <div className="w-8 h-8 rounded-full bg-gray-50" />
                    </div>
                  </div>
                  {/* Simulated Content */}
                  <div className="flex-1 flex gap-6">
                    {/* Sidebar */}
                    <div className="w-1/3 flex flex-col space-y-3">
                      <div className="w-full h-8 bg-[#e5fbf7]/60 rounded-lg border border-[#e5fbf7]" />
                      <div className="w-full h-8 bg-gray-50 rounded-lg" />
                      <div className="w-full h-8 bg-gray-50 rounded-lg" />
                    </div>
                    {/* Main Area */}
                    <div className="w-2/3 flex flex-col space-y-4">
                      <div className="w-1/2 h-6 bg-gray-100 rounded-md" />
                      <div className="w-full h-20 bg-[#fafafa] rounded-xl border border-gray-100 flex items-center px-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gray-200" />
                          <div className="flex flex-col space-y-2">
                            <div className="w-24 h-2.5 bg-gray-300 rounded-full" />
                            <div className="w-16 h-2 bg-gray-200 rounded-full" />
                          </div>
                        </div>
                        <div className="ml-auto w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[10px] text-red-500 font-bold shrink-0">!</div>
                      </div>
                      <div className="w-full h-20 bg-[#fafafa] rounded-xl border border-gray-100 flex items-center px-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gray-200" />
                          <div className="flex flex-col space-y-2">
                            <div className="w-24 h-2.5 bg-gray-300 rounded-full" />
                            <div className="w-16 h-2 bg-gray-200 rounded-full" />
                          </div>
                        </div>
                        <div className="ml-auto px-3 py-1 rounded-full bg-[#e5fbf7] flex items-center justify-center text-[10px] text-[#2fb0a1] font-bold">À jour</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mise en place simple Section */}
      <section id="mise-en-place" className="w-full bg-[#e5fbf7] py-16 lg:py-20 relative z-10 border-t border-teal-52/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mb-12 lg:mb-16 space-y-3">
            <span className="font-sans font-bold text-[#2c9d8f] uppercase tracking-widest text-sm">
              MISE EN PLACE SIMPLE
            </span>
            <h2 className="font-serif font-bold text-3xl lg:text-[40px] text-[#011a17] leading-tight">
              Intégrez UMi à votre pratique en 3 étapes.
            </h2>
          </div>

          {/* 50/50 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-16 lg:gap-24 items-center align-stretch">

            {/* Left Column: Visual */}
            <div className="w-full flex justify-center relative h-full min-h-[450px]">
              <div className="relative w-full h-full min-h-[450px]">
                <Image
                  src="/psy.jpg"
                  alt="Thérapeute utilisant UMi"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-[#2fb0a1]/10"
                  loading="lazy"
                />

                {/* Floating UI Element */}
                <div className="absolute -bottom-6 -right-2 lg:-bottom-8 lg:-right-8 bg-[#fafafa] p-4 lg:p-5 rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-4 z-20">
                  <div className="w-12 h-12 bg-[#e5fbf7] rounded-full flex items-center justify-center text-[#2fb0a1]">
                    <Lock className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-[15px] text-[#011a17] leading-snug">Accès Praticien</p>
                    <p className="font-sans text-[13px] text-[#1b544b] opacity-80">Espace sécurisé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Vertical Stepper */}
            <OnboardingStepper />

          </div>
        </div>
      </section>

      {/* Blog / Resources Section */}
      <section id="blog" className="w-full bg-[#f4f6f6] py-24 lg:py-32 relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mb-12 lg:mb-16 space-y-4">
            <span className="font-sans font-bold text-[#2c9d8f] uppercase tracking-widest text-sm">
              BLOG
            </span>
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#011a17] leading-tight">
              Pensé par et pour les professionnels de la santé mentale.
            </h2>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">

            {/* Card 1 */}
            {/* Suppression des bordures : bg-[#fafafa] pur */}
            <div className="flex flex-col h-full w-full max-w-[350px] mx-auto bg-[#fafafa] rounded-xl overflow-hidden shadow-none group transition-all duration-300 hover:bg-white">
              {/* Image : aspect-video (16/9) pour réduire la hauteur */}
              <div className="relative w-full aspect-video bg-gray-200 overflow-hidden shrink-0">
                <Image src="/article-1-image.jpg" alt="Article 1" fill sizes="(max-width: 768px) 100vw, 33vw" quality={90} loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              {/* Content */}
              <div className="p-5 lg:p-6 flex flex-col flex-grow items-start">
                <span className="bg-[#e5fbf7] text-teal-90 font-bold uppercase text-[11px] px-2.5 py-1 rounded-md mb-3 w-fit shrink-0">
                  Pratique Clinique
                </span>
                <h3 className="font-sans font-semibold text-[17px] lg:text-[18px] text-[#011a17] mb-2 line-clamp-2 min-h-[3rem] shrink-0">
                  Réduire l&apos;abandon : combler le vide inter-séance
                </h3>
                <p className="font-sans text-[13px] lg:text-[14px] text-[#1b544b] line-clamp-3 mb-4 min-h-[4.5rem]">
                  25 % des patients abandonnent leur suivi. Renforcez l&apos;adhésion entre les séances sans alourdir votre charge de travail.
                </p>
                <a href="#" className="flex items-center gap-1 text-[#011a17] font-semibold text-[14px] group/link mt-auto transition-colors hover:text-[#2fb0a1]">
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col h-full w-full max-w-[350px] mx-auto bg-[#fafafa] rounded-xl overflow-hidden shadow-none group transition-all duration-300 hover:bg-white">
              {/* Image */}
              <div className="relative w-full aspect-video bg-gray-200 overflow-hidden shrink-0">
                <Image src="/article-2-image.jpg" alt="Article 2" fill sizes="(max-width: 768px) 100vw, 33vw" quality={90} loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              {/* Content */}
              <div className="p-5 lg:p-6 flex flex-col flex-grow items-start">
                <span className="bg-[#e5fbf7] text-teal-90 font-bold uppercase text-[11px] px-2.5 py-1 rounded-md mb-3 w-fit shrink-0">
                  Outils Digitaux
                </span>
                <h3 className="font-sans font-semibold text-[17px] lg:text-[18px] text-[#011a17] mb-2 line-clamp-2 min-h-[3rem] shrink-0">
                  TCC : Pourquoi passer du PDF à l&apos;outil interactif ?
                </h3>
                <p className="font-sans text-[13px] lg:text-[14px] text-[#1b544b] line-clamp-3 mb-4 min-h-[4.5rem]">
                  Les fiches statiques freinent l&apos;engagement du patient. Voyez comment l&apos;IA adapte vos exercices au vécu réel de vos patients, en temps réel.
                </p>
                <a href="#" className="flex items-center gap-1 text-[#011a17] font-semibold text-[14px] group/link mt-auto transition-colors hover:text-[#2fb0a1]">
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col h-full w-full max-w-[350px] mx-auto bg-[#fafafa] rounded-xl overflow-hidden shadow-none group transition-all duration-300 hover:bg-white">
              {/* Image */}
              <div className="relative w-full aspect-video bg-gray-200 overflow-hidden shrink-0">
                <Image src="/article-3-image.jpg" alt="Article 3" fill sizes="(max-width: 768px) 100vw, 33vw" quality={90} loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              {/* Content */}
              <div className="p-5 lg:p-6 flex flex-col flex-grow items-start">
                <span className="bg-[#e5fbf7] text-teal-90 font-bold uppercase text-[11px] px-2.5 py-1 rounded-md mb-3 w-fit shrink-0">
                  Déontologie
                </span>
                <h3 className="font-sans font-semibold text-[17px] lg:text-[18px] text-[#011a17] mb-2 line-clamp-2 min-h-[3rem] shrink-0">
                  IA et éthique : un prolongement, pas un substitut
                </h3>
                <p className="font-sans text-[13px] lg:text-[14px] text-[#1b544b] line-clamp-3 mb-4 min-h-[4.5rem]">
                  La sécurité des données HDS est non négociable. Découvrez un cadre éthique où l&apos;IA assiste votre pratique sans jamais remplacer votre expertise.
                </p>
                <a href="#" className="flex items-center gap-1 text-[#011a17] font-semibold text-[14px] group/link mt-auto transition-colors hover:text-[#2fb0a1]">
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

          </div>

          {/* See All Button : Hover exactement comme le logo/screenshot */}
          <div className="mt-8 lg:mt-10 flex justify-end w-full">
            <button className="bg-teal-52 text-white border border-transparent font-sans font-bold text-[14px] px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-teal-82 hover:opacity-90 shadow-md shadow-teal-52/20">
              Voir tous les articles
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full bg-[#fafafa] py-24 lg:py-32 relative z-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center w-full mb-12 lg:mb-16 space-y-4">
            <span className="font-sans font-bold text-[#2fb0a1] uppercase tracking-widest text-sm">
              FAQ
            </span>
            <h2 className="font-serif font-bold text-3xl lg:text-[40px] text-[#011a17] leading-tight">
              Tout ce que vous devez savoir avant de commencer.
            </h2>
          </div>

          {/* Accordion */}
          <FaqAccordion />

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#011a17] py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            {/* Colonne 1 : Marque */}
            <div className="flex flex-col space-y-4 lg:pr-8">
              <ScrollToTopLink className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity">
                <Image src="/logo_umi.png" alt="UMi Logo" width={36} height={36} className="shrink-0 object-contain" />
                <span className="font-serif text-2xl font-bold text-[#fafafa]">UMi</span>
              </ScrollToTopLink>
              <p className="font-sans text-[#fafafa]/70 text-[15px] leading-relaxed">
                L&apos;application qui prolonge l&apos;impact de vos consultations TCC. Hébergée sur serveurs certifiés HDS.
              </p>
            </div>

            {/* Colonne 2 : Navigation */}
            <div className="flex flex-col space-y-6">
              <h4 className="font-sans font-semibold text-[#fafafa]">Produit</h4>
              <ul className="flex flex-col space-y-3">
                <li><a href="#constat" className="font-sans text-[15px] text-[#fafafa]/70 hover:text-[#2fb0a1] transition-colors">Le constat</a></li>
                <li><a href="#fonctionnement" className="font-sans text-[15px] text-[#fafafa]/70 hover:text-[#2fb0a1] transition-colors">Fonctionnement</a></li>
                <li><a href="#mise-en-place" className="font-sans text-[15px] text-[#fafafa]/70 hover:text-[#2fb0a1] transition-colors">Mise en place</a></li>
                <li><a href="#faq" className="font-sans text-[15px] text-[#fafafa]/70 hover:text-[#2fb0a1] transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Colonne 3 : Ressources */}
            <div className="flex flex-col space-y-6">
              <h4 className="font-sans font-semibold text-[#fafafa]">Ressources</h4>
              <ul className="flex flex-col space-y-3">
                <li><a href="#blog" className="font-sans text-[15px] text-[#fafafa]/70 hover:text-[#2fb0a1] transition-colors">Blog</a></li>
                <li><a href="#" className="font-sans text-[15px] text-[#fafafa]/70 hover:text-[#2fb0a1] transition-colors">Accès Praticien</a></li>
                <li><a href="#" className="font-sans text-[15px] text-[#fafafa]/70 hover:text-[#2fb0a1] transition-colors">Liste d&apos;attente (Early-bird)</a></li>
              </ul>
            </div>

            {/* Colonne 4 : Légal */}
            <div className="flex flex-col space-y-6">
              <h4 className="font-sans font-semibold text-[#fafafa]">Légal</h4>
              <ul className="flex flex-col space-y-3">
                <li><a href="#" className="font-sans text-[15px] text-[#fafafa]/70 hover:text-[#2fb0a1] transition-colors">Mentions légales</a></li>
                <li><a href="#" className="font-sans text-[15px] text-[#fafafa]/70 hover:text-[#2fb0a1] transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="font-sans text-[15px] text-[#fafafa]/70 hover:text-[#2fb0a1] transition-colors">CGU</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#fafafa]/10 pt-8 flex flex-col md:flex-row items-center justify-center md:justify-start">
            <p className="font-sans text-sm text-[#fafafa]/70 text-center md:text-left">
              © 2026 UMi. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
