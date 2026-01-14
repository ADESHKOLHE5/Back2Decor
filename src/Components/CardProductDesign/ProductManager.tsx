import CardDesign from "../CardDesign/CardDesign";
import { products } from "../../data1/products";
import type { Product } from "../../Type/product";

const ProductManager = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", padding: "40px" }}>
      {products.map((item:Product) => (
        <CardDesign key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductManager;
