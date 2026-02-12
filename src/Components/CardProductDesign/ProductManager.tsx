import CardDesign from "../CardDesign/CardDesign";
import type { Product } from "../../Type/product";
import useFetch from "../../Hooks/useFetch";
import {ErrorApiFetch} from "../ErrorMessage/ErrorApiFetch";
import ProductSearch from "../SeachInput/ProductSearch";
import { Box } from "@mui/material";
import FilterSidebar from "../SideBar/SideBar";
import { Design1, Design2,Design3} from "./ProductStyles";
import LoadingMessage from "../LoadingMessage/LoadingMessage";
import { useSearch } from "../../Contexts/SearchContext";
import { useFilteredProducts } from "../../Hooks/useFilteredProducts";
import AddNewProduct from "../AddProduct/AddNewProduct";
import { useAuth } from "../../Contexts/AuthContext";
import { useCallback } from "react";


export const ProductManager = ({onAddproduct}: {onAddproduct: (product: Product) => void}) => {
  const { BakeProductData, loading, error, refetch } = useFetch<Product[]>("http://localhost:3000/BakePackProducts");
  const { searchQuery, selectedCategories, priceRange } = useSearch();
  const auth = useAuth();

  const filteredProducts = useFilteredProducts(BakeProductData, searchQuery, selectedCategories, priceRange);
  
  const handleProductAdded = useCallback((product: Product) => {
    onAddproduct(product);
    // Refetch the products to show the newly added product
    refetch();
  }, [onAddproduct, refetch]);

  return (
    <>
    {/* Add Product Section - Only show for admin users */}
        {auth.hasRole('admin') && (
          <Box sx={{ marginBottom: '40px' }}>
            <AddNewProduct onAddproduct={handleProductAdded} />
          </Box>
        )}
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
      <ProductSearch />
    </Box>
    
    
    <Box sx={Design1}>

      <Box sx={Design2}>
        <FilterSidebar />
      </Box>

      <Box sx={Design3}>
        {loading && <LoadingMessage />}
        {error && <ErrorApiFetch msg={error}/>}
        {filteredProducts.map((item:Product) => (
          <CardDesign key={item.id} product={item} isAdmin={auth.hasRole('admin')} />
        ))}
      </Box>
    </Box>
    </>
  );
};


