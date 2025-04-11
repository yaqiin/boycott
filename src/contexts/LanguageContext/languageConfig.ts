export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  dir: 'rtl' | 'ltr';
}

export const SUPPORTED_LANGUAGES: Record<string, LanguageConfig> = {
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  en: { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  bn: { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr' },
  tr: { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr' },
  ur: { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl' },
};

export type Language = keyof typeof SUPPORTED_LANGUAGES;

export const translations = {
  bn: {
    'siteName': 'ইয়াকীন বয়কট',
    'siteSlogan': 'নৈতিক বয়কট, আমাদের ভাইদের সমর্থন',
    'toggleLanguage': 'বাংলা',
    'searchPlaceholder': 'একটি পণ্য খুঁজুন',
    'productName': 'পণ্যের নাম',
    'countryOfOrigin': 'উৎপত্তির দেশ',
    'alternatives': 'বিকল্পসমূহ',
    'noAlternatives': 'এখনো কোনো বিকল্প উপলব্ধ নেই',
    'loading': 'লোড হচ্ছে...',
    'error': 'ডেটা লোড করতে সমস্যা হয়েছে',
    'pageNotFound': 'উপস! পেজটি পাওয়া যায়নি',
    'backHome': 'হোমে ফিরুন',
    'introText': 'ইসরায়েলি এবং মার্কিন প্রযুক্তি পণ্যের নৈতিক বিকল্পগুলি আবিষ্কার করতে সাহায্য করার একটি প্ল্যাটফর্ম।',
    'copyright': 'ইয়াকীন বয়কট। সর্বস্বত্ব সংরক্ষিত।'
  },
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
    'introText': 'منصة تساعدك على اكتشاف بدائل أخلاقية للمنتجات التقنية الإسرائيلية والأمريكية.',
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
  id: {
    'siteName': 'Yaqiin Boikot',
    'siteSlogan': 'Boikot Etis, Mendukung Saudara-saudara Kita',
    'toggleLanguage': 'Bahasa Indonesia',
    'searchPlaceholder': 'Cari produk',
    'productName': 'Nama Produk',
    'countryOfOrigin': 'Negara Asal',
    'alternatives': 'Alternatif',
    'noAlternatives': 'Belum ada alternatif tersedia',
    'loading': 'Memuat...',
    'error': 'Kesalahan memuat data',
    'pageNotFound': 'Ups! Halaman tidak ditemukan',
    'backHome': 'Kembali ke Beranda',
    'introText': 'Platform untuk membantu Anda menemukan alternatif etis untuk produk teknologi Israel dan AS.',
    'copyright': 'Yaqiin Boikot. Hak cipta dilindungi.'
  },
  tr: {
    'siteName': 'Yaqiin Boykot',
    'siteSlogan': 'Etik Boykot, Kardeşlerimize Destek',
    'toggleLanguage': 'Türkçe',
    'searchPlaceholder': 'Bir ürün ara',
    'productName': 'Ürün Adı',
    'countryOfOrigin': 'Menşe Ülke',
    'alternatives': 'Alternatifler',
    'noAlternatives': 'Henüz alternatif bulunmamaktadır',
    'loading': 'Yükleniyor...',
    'error': 'Veri yüklenirken hata oluştu',
    'pageNotFound': 'Ups! Sayfa bulunamadı',
    'backHome': 'Ana Sayfaya Dön',
    'introText': 'İsrail ve ABD teknoloji ürünlerine etik alternatifler bulmanıza yardımcı olacak bir platform.',
    'copyright': 'Yaqiin Boykot. Tüm hakları saklıdır.'
  },
  ur: {
    'siteName': 'یقین بائیکاٹ',
    'siteSlogan': 'اخلاقی بائیکاٹ، ہمارے بھائیوں کی حمایت',
    'toggleLanguage': 'اردو',
    'searchPlaceholder': 'مصنوعات تلاش کریں',
    'productName': 'مصنوعات کا نام',
    'countryOfOrigin': 'اصل ملک',
    'alternatives': 'متبادلات',
    'noAlternatives': 'ابھی تک کوئی متبادل دستیاب نہیں',
    'loading': 'لوڈ ہو رہا ہے...',
    'error': 'ڈیٹا لوڈ کرنے میں خرابی',
    'pageNotFound': 'افسوس! صفحہ نہیں ملا',
    'backHome': 'واپس ہوم پیج',
    'introText': 'اسرائیلی اور امریکی ٹیک مصنوعات کے اخلاقی متبادلات دریافت کرنے میں آپ کی مدد کرنے کا پلیٹ فارم۔',
    'copyright': 'یقین بائیکاٹ۔ جملہ حقوق محفوظ ہیں۔'
  }
};

export type TranslationKey = keyof typeof translations['ar'];

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
  supportedLanguages: typeof SUPPORTED_LANGUAGES;
  isLoading: boolean;
}
