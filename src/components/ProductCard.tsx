import { ProductUI } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CountryFlag from './CountryFlag';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: ProductUI;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t, isRTL, language } = useLanguage();

  return (
    <Card
      className="card-hover flex w-full flex-col overflow-hidden bg-background"
      style={{ maxHeight: '400px' }}
    >
      <CardHeader className="flex-none bg-yaqiin-50 py-3 dark:bg-yaqiin-700/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            {product.category && (
              <Badge variant="outline" className="mt-1 bg-background/50">
                {product.category.name[language]}
              </Badge>
            )}
          </div>
          <CountryFlag country={product?.country} />
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto pt-4">
        <h4 className="mb-2 font-medium">{t('alternatives')}:</h4>
        {product.alternatives && product.alternatives.length > 0 ? (
          <ul className={`space-y-2 ${isRTL ? 'pr-4' : 'pl-4'}`}>
            {product.alternatives.map((alt, index) => (
              <li key={index} className="flex items-center justify-between">
                <a href={alt.link} target="_blank" rel="noopener noreferrer" className="flex gap-2">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${alt.link}`}
                    className="h-5 w-5 rounded-sm object-cover"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = './category-not-found.png';
                    }}
                  />
                  <span className="font-medium hover:text-yaqiin-700">{alt.name}</span>
                </a>
                <CountryFlag key={index} country={alt.country} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">{t('noAlternatives')}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
