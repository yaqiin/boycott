// Language configuration
export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  dir: 'rtl' | 'ltr';
}

export const SUPPORTED_LANGUAGES: Record<string, LanguageConfig> = {
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  en: { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr' }
};

export type Language = keyof typeof SUPPORTED_LANGUAGES;

// Translations object
export const translations = {
  ar: {
    'siteName': 'يقين للمقاطعة',
    'siteSlogan': 'مقاطعة أخلاقية، نصرة لأخوتنا',
    'toggleLanguage': 'English',
    'searchPlaceholder': 'ابحث عن منتج',
    'productName': 'اسم المنتج',
    'countryOfOrigin': 'بلد المنشأ',
    'alternatives': 'البدائل',
    'noAlternatives': 'لا توجد بدائل متاحة حاليًا',
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
    'noAlternatives': 'No alternatives available yet',
    'loading': 'Loading...',
    'error': 'Error loading data',
    'pageNotFound': 'Oops! Page not found',
    'backHome': 'Back Home',
    'introText': 'A platform to help you discover ethical alternatives to Israeli and US tech products.',
    'copyright': 'Yaqiin Boycott. All rights reserved.'
  },
  fr: {
    'siteName': 'Yaqiin Boycott',
    'siteSlogan': 'Boycott Éthique, Soutenir Nos Frères',
    'toggleLanguage': 'Changer de langue',
    'searchPlaceholder': 'Rechercher un produit',
    'productName': 'Nom du Produit',
    'countryOfOrigin': 'Pays d\'Origine',
    'alternatives': 'Alternatives',
    'noAlternatives': 'Aucune alternative disponible pour le moment',
    'loading': 'Chargement...',
    'error': 'Erreur lors du chargement des données',
    'pageNotFound': 'Oups ! Page non trouvée',
    'backHome': 'Retour à l\'Accueil',
    'introText': 'Une plateforme pour vous aider à découvrir des alternatives éthiques aux produits technologiques israéliens et américains.',
    'copyright': 'Yaqiin Boycott. Tous droits réservés.'
  },
  es: {
    'siteName': 'Yaqiin Boicot',
    'siteSlogan': 'Boicot Ético, Apoyando a Nuestros Hermanos',
    'toggleLanguage': 'Cambiar Idioma',
    'searchPlaceholder': 'Buscar un producto',
    'productName': 'Nombre del Producto',
    'countryOfOrigin': 'País de Origen',
    'alternatives': 'Alternativas',
    'noAlternatives': 'No hay alternativas disponibles aún',
    'loading': 'Cargando...',
    'error': 'Error al cargar datos',
    'pageNotFound': '¡Ups! Página no encontrada',
    'backHome': 'Volver al Inicio',
    'introText': 'Una plataforma para ayudarte a descubrir alternativas éticas a productos tecnológicos israelíes y estadounidenses.',
    'copyright': 'Yaqiin Boicot. Todos los derechos reservados.'
  }
};

// Translation keys type
export type TranslationKey = keyof typeof translations['ar'];

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
  supportedLanguages: typeof SUPPORTED_LANGUAGES;
  isLoading: boolean;
}
