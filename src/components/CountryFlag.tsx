
import { useLanguage } from "@/contexts/LanguageContext";

interface CountryFlagProps {
  countryCode: string;
  countryName: string;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ countryCode, countryName }) => {
  const { isRTL } = useLanguage();
  
  // Handle special cases
  if (countryCode === "XX") {
    return <span className="font-semibold">{countryName}</span>;
  }
  
  return (
    <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
      <span className="text-lg" role="img" aria-label={countryName}>
        {countryCode === "XX" ? "🌐" : getFlagEmoji(countryCode)}
      </span>
      <span>{countryName}</span>
    </div>
  );
};

// Function to convert country code to flag emoji
function getFlagEmoji(countryCode: string): string {
  if (!countryCode) return "🌐";
  
  // Special case for global open source
  if (countryCode === "XX") return "🌐";
  
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  
  return String.fromCodePoint(...codePoints);
}

export default CountryFlag;
