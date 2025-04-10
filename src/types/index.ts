
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
  country_code: string;
  alternatives: Alternative[];
}

// Transformed types for UI display
export interface ProductUI {
  name: string;
  country: Country;
  alternatives: AlternativeUI[];
}

export interface AlternativeUI {
  name: string;
  country: Country;
  link: string;
}
