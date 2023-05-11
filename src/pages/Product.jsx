import { Link, useParams } from "react-router-dom";
import ProductDetail from "../components/home/product/ProductDetail";
import SimilarProducts from "../components/home/product/SimilarProducts";

const Product = () => {
  const { id } = useParams();
  
  

  return (
    <main>
      
      <ProductDetail productId={id} />

      
     
    </main>
  );
};

export default Product;
