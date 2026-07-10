'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { ta } = useLanguage();

  const faqItems = ta<FaqItem[]>('faq.items');

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
