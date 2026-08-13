export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  description: string;
  specs: string[];
  stock: number;
};

export type Category = {
  name: string;
  count: string;
  image: string;
  accent: string;
};
