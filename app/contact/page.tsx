"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { submitToHubspot } from '@/app/actions/hubspot';
import { useSignupFormTracker } from '@/app/hooks/useSignupFormTracker';

export default function ContactPage() {
  // GTM : pousse l'événement signup_opened au montage de la page
  useSignupFormTracker('contact');
  // États pour les champs du formulaire
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pratique, setPratique] = useState('');

  // États pour la gestion de l'envoi
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitToHubspot({
        firstName,
        lastName,
        email,
        pratique,
      });

      if (result.success) {
        setIsSuccess(true);

        // GTM : événement de conversion après confirmation serveur
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'signup_completed',
          form_name: 'contact',
        });
      } else {
        alert(`Erreur HubSpot: ${result.message}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Erreur de connexion. Vérifiez votre réseau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#fafafa] overflow-clip font-sans selection:bg-[#e5fbf7]">
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 z-0 h-[800px] w-full pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(47, 176, 161, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(47, 176, 161, 0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-8 lg:pt-12 pb-24">
        {/* Bouton retour */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#2fb0a1] hover:text-[#1b544b] font-medium text-[14px] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>

        {isSuccess ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-[#e5fbf7] px-8">
            <CheckCircle2 className="w-16 h-16 text-[#2fb0a1] mx-auto mb-6" />
            <h2 className="font-serif font-bold text-3xl text-[#011a17] mb-4">Inscription validée !</h2>
            <p className="font-sans text-[#1b544b] text-lg leading-relaxed">
              Merci de rejoindre l&apos;aventure UMi. L&apos;équipe revient vers vous très prochainement pour votre accès.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-12 space-y-3">
              <h1 className="font-serif font-bold text-3xl lg:text-[40px] text-[#011a17] leading-tight">
                Rejoignez la liste d&apos;attente
              </h1>
              <p className="font-sans text-[#1b544b] text-[15px] lg:text-[16px] leading-relaxed">
                Laissez-nous vos coordonnées pour bénéficier d&apos;un accès anticipé et participer à la phase de test.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[13px] font-semibold text-[#011a17]">Prénom</label>
                  <input
                    required
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Votre prénom"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#e5fbf7] focus:border-[#2fb0a1] transition-all text-[#011a17] placeholder:text-gray-400 text-[15px]"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[13px] font-semibold text-[#011a17]">Nom</label>
                  <input
                    required
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#e5fbf7] focus:border-[#2fb0a1] transition-all text-[#011a17] placeholder:text-gray-400 text-[15px]"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[13px] font-semibold text-[#011a17]">Email</label>
                <input
                  required
                  type="email"
                  autoComplete="email"
                  data-1p-ignore="true"
                  data-protonpass-ignore="true"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#e5fbf7] focus:border-[#2fb0a1] transition-all text-[#011a17] placeholder:text-gray-400 text-[15px]"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[13px] font-semibold text-[#011a17]">Votre pratique (optionnel)</label>
                <textarea
                  rows={5}
                  value={pratique}
                  onChange={(e) => setPratique(e.target.value)}
                  placeholder="Parlez-nous brièvement de votre approche thérapeutique ou de vos besoins actuels."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#e5fbf7] focus:border-[#2fb0a1] transition-all text-[#011a17] placeholder:text-gray-400 text-[15px] resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#2fb0a1] text-white font-sans font-bold hover:bg-[#2c9d8f] transition-all hover:opacity-90 text-[15px] shadow-lg shadow-[#2fb0a1]/10 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi en cours..." : "Valider mon inscription"}
                </button>
                <p className="text-[12px] text-center text-[#1b544b]/70 mt-3">
                  En validant votre inscription, vous acceptez que l&apos;équipe UMi conserve vos données pour vous recontacter. <br /> Vos informations restent strictement confidentielles.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
