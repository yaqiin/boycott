import { Product, ProductUI, Country, Category } from '@/types';
import categoryData from '@/../data/categories.json';
import countryData from '@/../data/countries.json';
import productData from '@/../data/products.json';

export const getCategory = (categoryId: string): Category | undefined => {
  return (categoryData as Category[]).find((c) => c.id === categoryId);
};

export const getCountry = (code: string): Country | undefined => {
  return (countryData as Country[]).find((c) => c.code === code);
};

// Transform the data to match our UI models
const transformProductData = (products: Product[]): ProductUI[] => {
  return products.map((product) => {
    const category = getCategory(product.category_id);
    const country = getCountry(product.country_code);

    return {
      name: product.name,
      category: category,
      country: country,
      alternatives:
        product.alternatives?.map((alt) => ({
          name: alt.name,
          country: getCountry(alt.country_code),
          link: alt.link,
        })) || [],
    };
  });
};

export const fetchProducts = (): ProductUI[] => {
  const products = productData as Product[];
  return transformProductData(products);
};

export const getAllCategories = (): Category[] => {
  return categoryData as Category[];
};
