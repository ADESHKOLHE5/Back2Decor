import React from "react";
import {ProductManager} from "../Components/CardProductDesign/ProductManager";
import { Outlet } from "react-router-dom";


const ShopAll: React.FC = () => {
  return (
    <section style={{ padding: 24 }}>
       <ProductManager />
        <Outlet />
      </section>
    
  );
};

export default ShopAll;
