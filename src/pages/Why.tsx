import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {useLanguage} from "@/contexts/LanguageContext";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import * as LucideIcons from "lucide-react";
import {ArrowLeft, ArrowRight, LucideProps} from "lucide-react";
import whyBoycottData from '@/../data/why_boycott.json';
import * as react from "react";
import {ReactNode} from "react";

const Why = () => {
  const {t, isRTL, language} = useLanguage();

  function getIcon(iconName: string) {
    return LucideIcons[iconName as keyof typeof LucideIcons];
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow yaqiin-container py-8 animate-fade-in">
        <Link to="/">
          <Button variant="ghost" className="mb-6 flex items-center gap-2">
            {isRTL ?
              <ArrowRight size={16}/>
              :
              <ArrowLeft size={16}/>
            }
            <span>{t("backToProducts")}</span>
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-yaqiin-800 dark:text-yaqiin-500 text-center">
            {t("whyBoycott")}
          </h1>
          <section className="prose p-6 dark:prose-invert prose-yaqiin">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyBoycottData.map((item, index) => {
                const IconComponent = getIcon(item.icon);
                return (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      {IconComponent && (
                        <IconComponent className="text-yaqiin-800 dark:text-yaqiin-500 h-5 w-5"/>
                      )}
                      <h3 className="font-semibold text-yaqiin-800 dark:text-yaqiin-500">
                        {item.title[language]}
                      </h3>
                    </div>
                    <p className="text-mosque-accent">{item.description[language]}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Why;
