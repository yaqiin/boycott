import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Menu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import LanguageToggle from './LanguageToggle';
import { ModeToggle } from './ModeToggle';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet.tsx';
import { Button } from '@/components/ui/button.tsx';

type MenuItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }> | null;
  path: string;
};

const Header = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      label: t('products'),
      icon: Home,
      path: '/',
    },
    {
      label: t('whyBoycott'),
      icon: null,
      path: '/why',
    },
  ];

  const renderMobileMenu = () => (
    <div className="md:hidden">
      <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild>
          <Menu className="w-10 shadow-sm" />
        </SheetTrigger>
        <SheetContent side={isRTL ? 'right' : 'left'} className="w-64">
          <SheetHeader>
            <SheetTitle className="text-lg font-bold">{t('menuTitle')}</SheetTitle>
          </SheetHeader>
          <SheetDescription className="mt-4 flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-center"
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.label}
              </Button>
            ))}
            <LanguageToggle />
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );

  const renderLogo = () => (
    <div className={cn('flex items-center gap-4', isRTL ? 'ml-auto' : 'mr-auto')}>
      <Link to="/">
        <img src="/logo.png" alt="Site logo" className="h-12 w-12 md:h-16 md:w-16" />
      </Link>
      <div>
        <h1 className="text-xl font-bold md:text-2xl">{t('siteName')}</h1>
        <p className="text-sm md:text-base">{t('siteSlogan')}</p>
      </div>
    </div>
  );

  const renderDesktopNav = () => (
    <div className="hidden md:block">
      <nav className="mx-4 flex items-center gap-4">
        {menuItems.map((menuItem, index) => (
          <Link
            key={index}
            to={menuItem.path}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-foreground/80 transition-colors hover:text-yaqiin-500"
          >
            {menuItem.icon && <menuItem.icon size={18} />}
            <span>{menuItem.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );

  const renderControls = () => (
    <div className={cn(isRTL ? 'mr-auto' : 'ml-auto', 'flex items-center gap-2')}>
      <div className="hidden md:block">
        <LanguageToggle />
      </div>
      <ModeToggle />
    </div>
  );

  return (
    <header className="sticky top-0 z-10 bg-background/80 py-4 shadow-sm backdrop-blur-sm dark:shadow-yaqiin-50/5">
      <div className="yaqiin-container flex items-center justify-between">
        {renderMobileMenu()}
        {renderLogo()}
        {renderDesktopNav()}
        {renderControls()}
      </div>
    </header>
  );
};

export default Header;
