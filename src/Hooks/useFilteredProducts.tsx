import { useMemo } from 'react';
import type { Product } from '../Type/product';

export const useFilteredProducts = (
  BakeProductData: Product[] | null | undefined,
  searchQuery: string,
  selectedCategories: string[],
  priceRange: number[]
) => {
  return useMemo(() => {
    if (!BakeProductData) return [];

    return BakeProductData.filter((product) => {
      // Filter by search query (title or price range if query is a number)
      const searchNum = parseFloat(searchQuery);
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
       || (!isNaN(searchNum) && searchNum > 0 && product.price <= searchNum);

      // Filter by selected categories
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);

      // Filter by price range
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [BakeProductData, searchQuery, selectedCategories, priceRange]);
};
