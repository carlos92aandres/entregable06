import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductCart } from "../../store/slices/cart.slice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleClickAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProductCart({ productId: product.id, quantity: 1 }));
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="border-[1px] border-gray-300 rounded-md "
    >
      <div className="relative p-4 border-b-[1px] border-gray-300 h-[200px] overflow-hidden group">
        <img
          className="h-full w-full object-contain group-hover:opacity-0 transition-opacity duration-500"
          src={product.images[0].url}
          alt=""
        />
         <img
          className="h-full w-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          src={product.images[1].url}
          alt=""
        />
      </div>
      <section className="p-4 relative">
        <h4 className="text-gray-400 font-bold">{product.brand} </h4>
        <h3 className="font-bold text-sm ml-2">{product.title}</h3>

        <h4 className="text-gray-400 font-bold mt-4">Price</h4>

        <span className="font-bold text-sm ml-2">$ {product.price}</span>

        <button
          onClick={handleClickAddProduct}
          className="absolute right-4 text-xl bottom-4 bg-red-500 rounded-full w-[50px] aspect-square p-2 text-white hover:bg-red-600 transition-colors duration-200 hover:-translate-y-1"
        >
          {" "}
          <i className="bx bx-cart-alt"></i>{" "}
        </button>
      </section>
    </Link>
  );
};

export default ProductCard;
