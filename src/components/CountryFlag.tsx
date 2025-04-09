import { useLanguage } from "@/contexts/LanguageContext";
import { Country } from "@/types";
import ReactCountryFlag from "react-country-flag";
import { Earth, Github } from "lucide-react";

interface CountryFlagProps {
  country: Country;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ country }) => {
  const { isRTL } = useLanguage();

  const renderFlag = () => {
    switch (country?.code) {
      case "XX":
        return <Earth className="w-5 h-5 text-yaqiin-600" />;
      case "OSS":
        return <Github className="w-5 h-5 text-yaqiin-600" />;
      default:
        return <ReactCountryFlag countryCode={country?.code} svg title={country?.code} />;
    }
  };

  return (
    <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
      <span className="text-lg" role="img" aria-label={country?.name}>
        {renderFlag()}
      </span>
      <span>{country?.name}</span>
    </div>
  );
};

export default CountryFlag;
