
import {ProductUI} from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CountryFlag from "./CountryFlag";

interface ProductCardProps {
  product: ProductUI;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t, isRTL } = useLanguage();

  return (
    <Card className="card-hover w-full bg-white overflow-hidden p-3 rounded-[16px]">
      <CardHeader className="bg-neutral-100/65 rounded-xl opacity-90 p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium ">{product.name}</h3>
          <CountryFlag country={product?.country} />
        </div>
      </CardHeader>

      <CardContent className="pt-8">
        <h4 className="font-medium mb-2 text-yaqiin-700">
          {t("alternatives")}:
        </h4>
        {product.alternatives.length > 0 ? (
          <ul className={`space-y-3  `}>
            {product.alternatives.map((alt, index) => (
              <li
                key={index}
                className="flex justify-between items-center  bg-slate-100/60 py-2 px-4 rounded-xl mt-2"
              >
                <a href={alt.link} target="_blank text-[10px]">
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