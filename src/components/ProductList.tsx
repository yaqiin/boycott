import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProductUI } from "@/types";
import { fetchProducts } from "@/services/dataService";
import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";
import PageSelector from "./PageSelector";

const ProductList = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState<ProductUI[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductUI[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(t('error'));
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
    setCurrentPage(1);
  };



  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-pulse text-slate-600 text-xl">
          {t('loading')}
        </div>
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

      {currentItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-muted-foreground">
          {t('noAlternatives')}
        </div>
      )}

      {totalPages > 1 &&
        PageSelector({ totalPages, currentPage, handlePageChange })}
    </div>
  );
};

export default ProductList;
