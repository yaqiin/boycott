
export interface Alternative {
  id: number;
  name: string;
  countryOfOrigin: string;
  countryCode: string;
}

export interface Product {
  id: number;
  name: string;
  countryOfOrigin: "USA" | "Israel";
  countryCode: "US" | "IL";
  alternatives: Alternative[];
}
