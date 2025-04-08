
export interface Country {
  code: string;
  name: string;
}

export interface Alternative {
  id: number;
  name: string;
  country_code: string;
}

export interface Product {
  id: number;
  name: string;
  country_code: string;
  alternatives: Alternative[];
}

// Transformed types for UI display
export interface ProductUI {
  id: number;
  name: string;
  countryOfOrigin: "USA" | "Israel";
  countryCode: "US" | "IL";
  alternatives: AlternativeUI[];
}

export interface AlternativeUI {
  id: number;
  name: string;
  countryOfOrigin: string;
  countryCode: string;
}
