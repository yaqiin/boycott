import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ProductSearchProps {
  onSearch: (term: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSearch }) => {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full">
      <div
        className={`absolute ${
          isRTL ? 'left-3' : 'right-3'
        } top-1/2 -translate-y-1/2 transform text-muted-foreground`}
      >
        <Search size={20} className="text-foreground/80" />
      </div>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={t('searchPlaceholder')}
        className={`bg-white py-6 dark:bg-yaqiin-300/20 ${
          isRTL ? 'pl-10 text-right' : 'pr-10'
        } rounded-md border-yaqiin-200 placeholder:text-foreground/80 focus-visible:ring-yaqiin-500`}
      />
    </div>
  );
};

export default ProductSearch;
