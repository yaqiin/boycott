
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {ArrowLeft, ArrowRight, BicepsFlexed, Braces, CircleHelp, Crosshair, HeartHandshake} from "lucide-react";

const Why = () => {
  const { t, isRTL } = useLanguage();

  const whyList = [
    {
      icon: CircleHelp,
      subtitle: t("whyBoycottSubtitle1"),
      paragraph: t("whyBoycottParagraph1"),
    },
    {
      icon: BicepsFlexed,
      subtitle: t("whyBoycottSubtitle2"),
      paragraph: t("whyBoycottParagraph2"),
    },
    {
      icon: Crosshair,
      subtitle: t("whyBoycottSubtitle3"),
      paragraph: t("whyBoycottParagraph3"),
    },
    {
      icon: HeartHandshake,
      subtitle: t("whyBoycottSubtitle4"),
      paragraph: t("whyBoycottParagraph4"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow yaqiin-container py-8 animate-fade-in">
        <Link to="/">
          <Button variant="ghost" className="mb-6 flex items-center gap-2">
            {isRTL ?
              <ArrowRight size={16} />
              :
              <ArrowLeft size={16} />
            }
            <span>{t("backToProducts")}</span>
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-yaqiin-800 dark:text-yaqiin-500">
            {t("whyBoycott")}
          </h1>
          <section className="prose p-6 dark:prose-invert prose-yaqiin">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyList.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="text-yaqiin-800 dark:text-yaqiin-500 h-5 w-5"/>
                    <h3 className="font-semibold text-yaqiin-800 dark:text-yaqiin-500">{item.subtitle}</h3>
                  </div>
                  <p className="text-mosque-accent">{item.paragraph}</p>
                </div>
              ))
              }
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Why;
