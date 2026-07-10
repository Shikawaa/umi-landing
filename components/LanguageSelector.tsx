'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage, Locale } from '@/lib/i18n/LanguageContext';

const languages: { code: Locale; label: string }[] = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
];

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fermer au Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="p-2 rounded-lg text-teal-82 hover:text-[#2fb0a1] hover:bg-teal-5 transition-all cursor-pointer"
      >
        <Globe className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg shadow-black/8 border border-gray-100 py-1.5 min-w-[160px] z-50"
        >
          {languages.map((lang) => {
            const isActive = locale === lang.code;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setLocale(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-[15px] font-medium transition-colors cursor-pointer ${
                  isActive 
                    ? 'text-[#011a17]' 
                    : 'text-[#1b544b]/70 hover:text-[#011a17] hover:bg-gray-50'
                }`}
              >
                <span className="w-5 flex items-center justify-center shrink-0">
                  {isActive && <Check className="w-4 h-4 text-[#1b544b]" strokeWidth={2.5} />}
                </span>
                <span>{lang.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
