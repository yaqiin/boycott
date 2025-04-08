
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  ar: {
    'siteName': 'يقين للمقاطعة',
    'siteSlogan': 'مقاطعة أخلاقية، نصرة لأخوتنا',
    'toggleLanguage': 'English',
    'searchPlaceholder': 'ابحث عن منتج',
    'productName': 'اسم المنتج',
    'countryOfOrigin': 'بلد المنشأ',
    'alternatives': 'البدائل',
    'noAlternatives': 'لا توجد بدائل متاحة حاليًا يمكنك تقديم اقتراحك على',
    'loading': 'جاري التحميل...',
    'error': 'حدث خطأ في تحميل البيانات',
    'pageNotFound': 'عذرًا! الصفحة غير موجودة',
    'backHome': 'العودة إلى الصفحة الرئيسية',
    'introText': 'منصة تساعدك على اكتشاف بدائل أخلاقية للمنتجات التقنية الأمريكية والإسرائيلية.',
    'copyright': 'يقين للمقاطعة. جميع الحقوق محفوظة.'
  },
  en: {
    'siteName': 'Yaqiin Boycott',
    'siteSlogan': 'Ethical Boycott, Supporting Our Brothers',
    'toggleLanguage': 'العربية',
    'searchPlaceholder': 'Search for a product',
    'productName': 'Product Name',
    'countryOfOrigin': 'Country of Origin',
    'alternatives': 'Alternatives',
    'noAlternatives': 'No alternatives found. Suggest one on',
    'loading': 'Loading...',
    'error': 'Error loading data',
    'pageNotFound': 'Oops! Page not found',
    'backHome': 'Back Home',
    'introText': 'A platform to help you discover ethical alternatives to Israeli and US tech products.',
    'copyright': 'Yaqiin Boycott. All rights reserved.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Default to Arabic
  const [language, setLanguageState] = useState<Language>('ar');

  // On mount, check if language is stored
  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang && (storedLang === 'ar' || storedLang === 'en')) {
      setLanguageState(storedLang);
    }
  }, []);

  // Update HTML dir attribute when language changes
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
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
