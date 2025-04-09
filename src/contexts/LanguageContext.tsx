
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Language, LanguageContextType, SUPPORTED_LANGUAGES, translations, TranslationKey } from './languageConfig';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguageState] = useState<Language>('ar');

  // On mount, check stored language or detect browser language
  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang && storedLang in SUPPORTED_LANGUAGES) {
      setLanguageState(storedLang);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (browserLang in SUPPORTED_LANGUAGES) {
        setLanguageState(browserLang);
      }
    }
    setIsLoading(false);
  }, []);

  // Update HTML dir attribute when language changes
  useEffect(() => {
    document.documentElement.dir = SUPPORTED_LANGUAGES[language].dir;
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Translation function with English fallback
  const t = (key: TranslationKey): string => {
    const translation = translations[language][key];
    return translation || translations['en'][key] || key;
  };

  const isRTL = SUPPORTED_LANGUAGES[language].dir === 'rtl';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL, supportedLanguages: SUPPORTED_LANGUAGES, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
