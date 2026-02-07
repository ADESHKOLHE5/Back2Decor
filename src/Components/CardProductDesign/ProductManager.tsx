import CardDesign from "../CardDesign/CardDesign";
import type { Product } from "../../Type/product";
import useFetch from "../../Hooks/useFetch";
import ErrorApiFetch from "../ErrorMessage/ErrorApiFetch";
import ProductSearch from "../SeachInput/ProductSearch";
import { Box } from "@mui/material";
import FilterSidebar from "../SideBar/SideBar";
import { Design1, Design2,Design3} from "./ProductStyles";




const ProductManager = () => {
  const { BakeProductData, loading, error } = useFetch<Product[]>("http://localhost:3000/BakePackProducts");
 
  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
      <ProductSearch />
    </Box>

    <Box sx={Design1}>
    
      <Box sx={Design2}>
        <FilterSidebar />
      </Box>
      
      <Box sx={Design3}>
        {loading && <p>Loading products...</p>}
        {error && <ErrorApiFetch msg={error}/>}
        {BakeProductData && BakeProductData.map((item:Product) => (
          <CardDesign key={item.id} product={item} />
        ))}
      </Box>
    </Box>
    </>
  );
};

export default ProductManager;
