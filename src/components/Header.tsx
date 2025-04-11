import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { ModeToggle } from "./ModeToggle";
import { cn } from "@/lib/utils";

const Header = () => {
  const { t, isRTL } = useLanguage();

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm shadow-sm py-4 dark:shadow-yaqiin-50/5">
      <div className="yaqiin-container flex items-center justify-between">
        <div
          className={`flex items-center gap-4 ${isRTL ? "ml-auto" : "mr-auto"}`}
        >
          <img
            src="/logo.png"
            alt="Site logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
              {t("siteName")}
            </h1>
            <p className="text-mosque-accent text-sm md:text-base">
              {t("siteSlogan")}
            </p>
          </div>
        </div>
        <div
          className={cn(
            isRTL ? "mr-auto" : "ml-auto",
            "flex items-center gap-2"
          )}
        >
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
