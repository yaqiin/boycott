
import { Product, ProductUI, Country } from "@/types";
import countryData from '@/../data/countries.json';
import productData from '@/../data/products.json';

const getCountry = (code: string): Country => {
  return (countryData as Country[]).find(c => c.code === code);
};

// Transform the data to match our UI models
const transformProductData = (products: Product[]): ProductUI[] => {
  return products.map(product => ({
    name: product.name,
    country: getCountry(product.country_code),
    alternatives: product.alternatives.map(alt => ({
      name: alt.name,
      country: getCountry(alt.country_code),
      link: alt.link,
    }))
  }));
};

export const fetchProducts = async (): Promise<ProductUI[]> => {
  const products = productData as Product[];
  return transformProductData(products);
};
