export interface DecorType {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    rating?: number;
    inStock: boolean;
    category: string;
    subcategory?: string;
    sizes?: string;
}