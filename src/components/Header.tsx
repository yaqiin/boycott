
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const { t, isRTL } = useLanguage();

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm py-4">
      <div className="yaqiin-container flex items-center justify-between">
        <div className={`text-2xl font-bold text-yaqiin-700 ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
          {t('siteName')}
        </div>
        <div className={isRTL ? 'mr-auto' : 'ml-auto'}>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
