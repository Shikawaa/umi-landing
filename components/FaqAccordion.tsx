'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "UMi remplace-t-il le psychologue ?",
    answer: "UMi est un prolongement de votre pratique, jamais un substitut. L'app n'est conçue pour être utile qu'au sein d'un suivi avec un praticien. Elle ne diagnostique pas, elle ne décide rien pour le patient. Cette limite est un engagement fondateur, pas une précaution de communication."
  },
  {
    question: "Les données sont-elles vraiment sécurisées ?",
    answer: "L'infrastructure repose sur un hébergement HDS certifié en France. Les données de santé sont chiffrées au repos et en transit. Le patient contrôle ce qu'il partage avec vous : vous ne voyez jamais le contenu clinique brut sans son accord explicite."
  },
  {
    question: "Est-ce que ça va m'alourdir la charge de travail ?",
    answer: "C'est précisément la contrainte que nous nous sommes imposée. Vous configurez l'outil une fois, l'IA s'occupe de la contextualisation patient. Vous consultez un tableau de bord avant chaque séance, trente secondes. Aucune saisie supplémentaire n'est requise."
  },
  {
    question: "UMi est-il réservé aux praticiens TCC ?",
    answer: "La bibliothèque d'exercices du MVP est ancrée dans les approches cognitivo-comportementales. Si vous travaillez avec d'autres approches, UMi reste utilisable mais les exercices proposés ne seront pas tous pertinents. Nous ouvrirons progressivement la plateforme à d'autres modalités."
  },
  {
    question: "Qu'est-ce que je vois exactement de ce que fait mon patient ?",
    answer: "Au MVP, vous voyez les métadonnées d'engagement : exercices réalisés, fréquence, date du dernier usage. Pas le contenu des réponses. Cette séparation est un choix conscient : elle protège l'alliance thérapeutique et évite les biais de jugement hors séance."
  },
  {
    question: "Quand est-ce que le MVP sera disponible ?",
    answer: "Une bêta fermée ouvre dans les prochains mois avec une vingtaine de praticiens TCC pilotes. En rejoignant la liste early-bird, vous êtes prioritaire sur cet accès et vous bénéficiez du tarif préférentiel."
  }
];

export default function FaqAccordion() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col">
      {faqItems.map((faq, idx) => {
        const isOpen = openFaqIndex === idx;
        const buttonId = `faq-button-${idx}`;
        const contentId = `faq-content-${idx}`;

        return (
          <div key={idx} className="border-b border-gray-200">
            <button 
              id={buttonId}
              aria-controls={contentId}
              aria-expanded={isOpen}
              onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
              className="w-full flex justify-between items-center font-sans font-semibold text-[18px] text-[#011a17] py-6 cursor-pointer hover:text-[#2fb0a1] transition-colors group text-left"
            >
              <span>{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'text-[#2fb0a1] rotate-180' : 'text-[#011a17] group-hover:text-[#2fb0a1]'}`} 
                strokeWidth={1.5} 
              />
            </button>
            <div 
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="font-sans text-[15px] lg:text-[16px] text-[#1b544b] leading-relaxed pb-6 pr-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
