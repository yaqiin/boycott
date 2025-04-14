import { useLanguage } from '@/contexts/LanguageContext';
import { Country } from '@/types';
import ReactCountryFlag from 'react-country-flag';
import { Earth, Github } from 'lucide-react';

interface CountryFlagProps {
  country: Country;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ country }) => {
  const { isRTL, language } = useLanguage();

  const renderFlag = () => {
    switch (country?.code) {
      case 'XX':
        return <Earth className="h-5 w-5 text-yaqiin-600" />;
      case 'OSS':
        return <Github className="h-5 w-5 text-yaqiin-600" />;
      default:
        return <ReactCountryFlag countryCode={country?.code} svg title={country?.code} />;
    }
  };

  const getCountryName = (country: Country) => {
    if (country?.name[language]) {
      return country?.name[language];
    }
    return country?.name.en;
  };

  return (
    <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
      <span className="text-lg" role="img" aria-label={getCountryName(country)}>
        {renderFlag()}
      </span>
      <span>{getCountryName(country)}</span>
    </div>
  );
};

export default CountryFlag;
