
import { Product, ProductUI, Alternative, AlternativeUI, Country } from "@/types";
import productData from '@/data/products.json';

// Helper function to get country name by code
const getCountryName = (code: string): string => {
  const country = (productData.countries as Country[]).find(c => c.code === code);
  return country ? country.name : code;
};

// Transform the data to match our UI models
const transformProductData = (products: Product[]): ProductUI[] => {
  return products.map(product => ({
    id: product.id,
    name: product.name,
    countryOfOrigin: product.country_code === "US" ? "USA" : "Israel",
    countryCode: product.country_code as "US" | "IL",
    alternatives: product.alternatives.map(alt => ({
      id: alt.id,
      name: alt.name,
      countryOfOrigin: getCountryName(alt.country_code),
      countryCode: alt.country_code
    }))
  }));
};

export const fetchProducts = async (): Promise<ProductUI[]> => {
  // Simulate API delay for a more realistic experience
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Get products from the JSON file and transform them
  const products = productData.products as Product[];
  return transformProductData(products);
};
