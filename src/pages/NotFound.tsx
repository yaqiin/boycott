import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const location = useLocation();
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className={`flex min-h-screen items-center justify-center bg-gray-100 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">{t('pageNotFound')}</p>
        <a href="/" className="text-yaqiin-500 underline hover:text-yaqiin-700">
          {t('backHome')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
