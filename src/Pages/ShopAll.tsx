import React from "react";
import {ProductManager} from "../Components/CardProductDesign/ProductManager";
import { Outlet } from "react-router-dom";
import type { Product } from "../Type/product";
import axios from "axios";


const ShopAll: React.FC = ()=> {
  
  const handleAddProduct = async (newProduct: Product) => {
    try {
      const response = await axios.post("http://localhost:3000/BakePackProducts", newProduct);
      console.log("Submitted:", response.data);
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };
  return (
    <section style={{ padding: 24 }}>
       <ProductManager onAddproduct={handleAddProduct}  />
        <Outlet />
      </section>
    
  );
};

export default ShopAll;
