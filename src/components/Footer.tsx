import {Github, Mail} from "lucide-react";
import {useLanguage} from "@/contexts/LanguageContext";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/yaqiin/yaqiin-boycott",
    label: "Github",
  },
  {
    icon: Mail,
    href: "mailto:contact@yaqiin.org",
    label: "Mail",
  },
];

export function Footer() {
  const {t, isRTL} = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-yaqiin-500 text-yaqiin-100 mt-auto px-4">
      <div className="mx-auto max-w-7xl py-4 relative">
        {/* Mobile */}
        <div className="md:hidden flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mosque-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6"/>
              </a>
            ))}
          </div>

          <p className="text-sm text-center">
            {currentYear} &copy; {t('copyright')}
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mosque-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6"/>
              </a>
            ))}
          </div>

          <p
            className={`absolute top-1/2 -translate-y-1/2 text-sm ${
              isRTL ? "right-4 text-right" : "left-4 text-left"
            }`}
          >
            {currentYear} &copy; {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
