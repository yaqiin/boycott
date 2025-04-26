import { Product, ProductUI, Country, Category } from '@/types';
import categoryData from '@/../data/categories.json';
import countryData from '@/../data/countries.json';
import techProducts from '@/../data/products/tech.json';
import clothingProducts from '@/../data/products/clothing.json';
import foodDrinksProducts from '@/../data/products/food_drinks.json';

export const getCategory = (categoryId: string): Category | undefined => {
  return (categoryData as Category[]).find((c) => c.id === categoryId);
};

export const getCountry = (code: string): Country | undefined => {
  return (countryData as Country[]).find((c) => c.code === code);
};

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
  const allProducts = [
    ...(techProducts as Product[]),
    ...(clothingProducts as Product[]),
    ...(foodDrinksProducts as Product[]),
  ];

  return transformProductData(allProducts);
};

export const getAllCategories = (): Category[] => {
  return categoryData as Category[];
};
