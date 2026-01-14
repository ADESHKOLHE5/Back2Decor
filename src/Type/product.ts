export interface Product {
  id: number;
  category: string;
  title: string;
  price: number;
  rating: number;
  ratingCount: number;
  image: string;
  discount?: number; // discount percentage (0-23)
}
