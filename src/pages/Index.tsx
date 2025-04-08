
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <main className="yaqiin-container py-8 animate-fade-in">
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yaqiin-800">
            {t('siteName')}
          </h1>
          <p className="text-lg text-yaqiin-600">
            {t('introText')}
          </p>
        </div>
        <ProductList />
      </main>
    </div>
  );
};

export default Index;
