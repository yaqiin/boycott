import { Github, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/yaqiin/yaqiin-boycott',
    label: 'Github',
  },
  {
    icon: Mail,
    href: 'mailto:contact@yaqiin.org',
    label: 'Mail',
  },
];

export function Footer() {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full bg-secondary/20 px-4 text-foreground dark:bg-secondary/10">
      <div className="relative mx-auto max-w-7xl">
        {/* Subtle Separator */}
        <Separator className="mb-4 bg-muted-foreground/20" />

        {/* Mobile */}
        <div className="flex flex-col items-center gap-2 py-4 md:hidden">
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground dark:text-muted-foreground/70 dark:hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground dark:text-muted-foreground/70">
            {currentYear} &copy; {t('copyright')}
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden py-4 md:block">
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground dark:text-muted-foreground/70 dark:hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <p
            className={`absolute top-1/2 -translate-y-1/2 text-sm text-muted-foreground dark:text-muted-foreground/70 ${
              isRTL ? 'right-4 text-right' : 'left-4 text-left'
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
