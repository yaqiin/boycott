import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProductUI } from "@/types";
import { fetchProducts } from "@/services/dataService";
import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";

const ProductList = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState<ProductUI[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductUI[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(t("error"));
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [t]);

  const handleSearch = (term: string) => {
    if (!term.trim()) {
      setFilteredProducts(products);
      return;
    }

    const searchTermLower = term.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTermLower) ||
        product.alternatives.some((alt) =>
          alt.name.toLowerCase().includes(searchTermLower)
        )
    );

    setFilteredProducts(filtered);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-pulse text-slate-600 text-xl">{t("loading")}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="mb-8">
        <ProductSearch onSearch={handleSearch} />
      </div>

      
      <div className="mb-6 text-right text-slate-700 mt-6">
        <p>
          {t("عدد المنتجات التي تظهر هو")}: <span className="font-bold">{filteredProducts.length}</span>
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-muted-foreground">
            {t("noAlternatives")}
            <a target="_blank" href="https://github.com/yaqiin/yaqiin-boycott"> Github</a>
        </div>
      )}
    </div>
  );
};

export default ProductList;