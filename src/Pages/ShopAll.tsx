import React from 'react';
// import { Outlet } from 'react-router-dom';
import ProductManager from '../Components/CardProductDesign/ProductManager';

const ShopAll: React.FC = () => {
  return (
    <section style={{ padding: 24 }}>
       <ProductManager />
        {/* <Outlet /> */}
      </section>
    
  );
};

export default ShopAll;
