export interface Category {
  id: string;
  name: Record<string, string>;
}

export interface Country {
  code: string;
  name: Record<string, string>;
}

export interface Alternative {
  name: string;
  country_code: string;
  link: string;
}

export interface Product {
  name: string;
  category_id: string;
  country_code: string;
  category?: string;
  alternatives?: Alternative[];
}

// Transformed types for UI display
export interface ProductUI {
  name: string;
  category?: Category;
  country?: Country;
  alternatives?: AlternativeUI[];
}

export interface AlternativeUI {
  name: string;
  country?: Country;
  link: string;
}

export interface WhyBoycottItem {
  icon: string;
  title: Record<string, string>;
  description: Record<string, string>;
}
