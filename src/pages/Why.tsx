import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import rawWhyBoycottData from '@/../data/why_boycott.json';
import { WhyBoycottItem } from '@/types';

const Why = () => {
  const { t, isRTL, language } = useLanguage();

  const whyBoycottData = rawWhyBoycottData as WhyBoycottItem[];

  function getIcon(iconName: string) {
    return LucideIcons[iconName as keyof typeof LucideIcons];
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="yaqiin-container flex-grow animate-fade-in py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 flex items-center gap-2">
            {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            <span>{t('backToProducts')}</span>
          </Button>
        </Link>

        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-center text-3xl font-bold text-yaqiin-800 dark:text-yaqiin-500">
            {t('whyBoycott')}
          </h1>
          <section className="prose dark:prose-invert prose-yaqiin p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {whyBoycottData.map((item, index) => {
                const IconComponent = getIcon(item.icon);
                return (
                  <div key={index} className="rounded-lg border p-4 hover:shadow-md">
                    <div className="mb-2 flex items-center gap-2">
                      {IconComponent && (
                        <IconComponent className="h-5 w-5 text-yaqiin-800 dark:text-yaqiin-500" />
                      )}
                      <h3 className="font-semibold text-yaqiin-800 dark:text-yaqiin-500">
                        {item.title[language]}
                      </h3>
                    </div>
                    <p>{item.description[language]}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Why;
