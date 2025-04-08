
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
      aria-label={t('toggleLanguage')}
    >
      <Globe size={16} />
      <span>{t('toggleLanguage')}</span>
    </Button>
  );
};

export default LanguageToggle;
