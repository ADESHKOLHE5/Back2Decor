import CardDesign from "../CardDesign/CardDesign";
import type { Product } from "../../Type/Product";
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
import axios from "axios";


 

export const ProductManager = () => {
  const { BakeProductData, loading, error } = useFetch<Product[]>("http://localhost:3000/BakePackProducts");
  const { searchQuery, selectedCategories, priceRange } = useSearch();

  const filteredProducts = useFilteredProducts(BakeProductData, searchQuery, selectedCategories, priceRange);
  
  const handleAddProduct = async (newProduct:Product ) => {
    try {
      const response = await axios.post("http://localhost:3000/BakePackProducts", newProduct);
      console.log("Submitted:", response.data);
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  return (
    <>
    <AddNewProduct onAddproduct={handleAddProduct} />
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
          <CardDesign key={item.id} product={item} />
        ))}
      </Box>
    </Box>
    </>
  );
};


