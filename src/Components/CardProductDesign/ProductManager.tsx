import CardDesign from "../CardDesign/CardDesign";
import type { Product } from "../../Type/product";
 import useFetch from "../../Hooks/useFetch";




const ProductManager = () => {
  const { BakeProductData, loading, error } = useFetch<Product[]>("http://localhost:3000/BakePackProducts");
 
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", padding: "40px" }}>
      {loading && <p>Loading products...</p>}
      {error && <p>Error: {error}</p>}
      {BakeProductData && BakeProductData.map((item:Product) => (
        <CardDesign key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductManager;
