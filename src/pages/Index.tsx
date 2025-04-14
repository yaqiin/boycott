import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductList from '@/components/ProductList';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`flex min-h-screen flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />
      <main className="yaqiin-container flex-grow animate-fade-in py-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-yaqiin-800 dark:text-yaqiin-500 md:text-4xl">
            {t('siteName')}
          </h1>
          <p className="text-lg">{t('introText')}</p>
        </div>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
