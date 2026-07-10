'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import langFr from './lang_fr.json';
import langEn from './lang_en.json';

export type Locale = 'fr' | 'en';

type Translations = typeof langFr;

const translations: Record<Locale, Translations> = {
  fr: langFr,
  en: langEn,
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  ta: <T = unknown>(key: string) => T;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

/**
 * Accède à une valeur imbriquée par chemin de clé en notation pointée.
 * Ex: getNestedValue(obj, 'nav.constat') => obj.nav.constat
 */
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return current;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr');
  const [mounted, setMounted] = useState(false);

  // Lire la préférence depuis localStorage au montage
  useEffect(() => {
    const saved = localStorage.getItem('umi-locale') as Locale | null;
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  // Mettre à jour l'attribut lang du <html> et sauvegarder
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('umi-locale', newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  // Sync html lang au montage
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  /**
   * Traduit une clé en notation pointée. Retourne la clé elle-même si non trouvée.
   * Usage: t('nav.constat') => "Le constat" | "The problem"
   */
  const t = useCallback((key: string): string => {
    const value = getNestedValue(translations[locale] as unknown as Record<string, unknown>, key);
    if (typeof value === 'string') return value;
    return key;
  }, [locale]);

  /**
   * Accède à une valeur complexe (tableau, objet) par clé.
   * Usage: ta<Step[]>('onboarding.steps')
   */
  const ta = useCallback(<T = unknown>(key: string): T => {
    const value = getNestedValue(translations[locale] as unknown as Record<string, unknown>, key);
    return value as T;
  }, [locale]);

  // Stabiliser la référence du value object pour éviter les re-renders cascade
  const activeLocale = mounted ? locale : 'fr';
  const contextValue = useMemo<LanguageContextType>(
    () => ({ locale: activeLocale, setLocale, t, ta }),
    [activeLocale, setLocale, t, ta]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
