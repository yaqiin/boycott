
import { useLanguage } from "@/contexts/LanguageContext";
import {Country} from "@/types";
import ReactCountryFlag from "react-country-flag";

interface CountryFlagProps {
  country: Country;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ country }) => {
  const { isRTL } = useLanguage();

  return (
    <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
      <span className="text-lg" role="img" aria-label={country.name}>
        {country?.code === "XX" ? "🌐" : <ReactCountryFlag countryCode={country?.code} svg title={country?.code} />}
      </span>
      <span>{country.name}</span>
    </div>
  );
};

export default CountryFlag;
