import { ProductUI } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CountryFlag from "./CountryFlag";

interface ProductCardProps {
  product: ProductUI;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t, isRTL } = useLanguage();

  return (
    <Card className="card-hover w-full bg-background overflow-hidden">
      <CardHeader className="bg-yaqiin-50 dark:bg-yaqiin-700/10 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <CountryFlag country={product?.country} />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <h4 className="font-medium mb-2">{t("alternatives")}:</h4>
        {product.alternatives.length > 0 ? (
          <ul className={`space-y-2 ${isRTL ? "pr-4" : "pl-4"}`}>
            {product.alternatives.map((alt, index) => (
              <li key={index} className="flex justify-between items-center">
                <a href={alt.link} target="_blank">
                  <span className="font-medium hover:text-yaqiin-700">
                    {alt.name}
                  </span>
                </a>
                <CountryFlag key={index} country={alt.country} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">{t("noAlternatives")}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
