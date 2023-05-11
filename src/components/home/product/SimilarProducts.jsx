import React, { useEffect, useState } from "react";
import { axiosEcommerce } from "../../../utils/configAxios";
import Product from "../../../pages/Product";
import ProductCard from "../ProductCard";

const SimilarProducts = ({ categoryId, productId }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  useEffect(() => {
    if (categoryId) {
      axiosEcommerce
        .get(`products?categoryId=${categoryId}`)
        .then((res) => {
          const otherProducts = res.data.filter(
            (product) => product.id !== productId
          );
          setSimilarProducts(otherProducts);
        })
        .catch((err) => console.log(err));
    }
  }, [categoryId, productId]);

  return (
    <section className="grid gap-3 mx-2 p-3">
      <h2 className="font-bold text-red-500 text-lg ">Discover similar items</h2>

      <section className="grid gap-6 sm:grid-cols-2">
        {similarProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </section>
  );
};

export default SimilarProducts;
