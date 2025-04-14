import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Category, ProductUI } from '@/types';
import { fetchProducts, getAllCategories } from '@/services/dataService';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import PageSelector from './PageSelector';
import CategoryFilter from './CategoryFilter';
import { Badge } from './ui/badge';

const ProductList = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState<ProductUI[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductUI[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<Category[]>([]);

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const loadProducts = useCallback(() => {
    try {
      setIsLoading(true);
      const data = fetchProducts();
      setProducts(data);
      setFilteredProducts(data);

      const allCategories = getAllCategories();
      setCategories(allCategories);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(t('error'));
    } finally {
      setIsLoading(false);
    }
  }, [t]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const filterProducts = useCallback(() => {
    let results = products;

    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTermLower) ||
          product.alternatives?.some((alt) => alt.name.toLowerCase().includes(searchTermLower)),
      );
    }

    if (selectedCategory !== 'all') {
      results = results.filter((product) => product.category?.id === selectedCategory);
    }

    setFilteredProducts(results);
    setCurrentPage(1);
  }, [products, searchTerm, selectedCategory]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-pulse text-xl">{t('loading')}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center text-red-600 dark:text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="mb-6 flex flex-col items-center gap-4 md:flex-row">
        <div className="w-full md:w-2/3">
          <ProductSearch onSearch={handleSearch} />
        </div>
        <div className="w-full md:w-1/3">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <Badge
          variant="outline"
          className="gap-1 border-muted-foreground/20 bg-secondary/20 px-4 py-2 text-sm dark:bg-secondary/10"
        >
          <span className="text-yaqiin-600"> {filteredProducts.length}</span>
          <span>{t('productsCount')}</span>
        </Badge>
      </div>

      {currentItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-10 text-center text-muted-foreground">{t('noAlternatives')}</div>
      )}

      {totalPages > 1 && (
        <PageSelector
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ProductList;
