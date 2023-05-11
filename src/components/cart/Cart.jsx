import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, purchasesCart } from "../../store/slices/cart.slice";
import CartProducts from "./CartProducts";

const Cart = () => {
  const { isShowCart, products } = useSelector((store) => store.cart);
  const { token } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();

  const totalPrice = products.reduce(
    (acc, curr) => acc + curr.quantity * curr.product.price,
    0
  );
  const handleClickCheckout = () => {
    dispatch(purchasesCart());
  };

  useEffect(() => {
    if (isShowCart) {
      dispatch(getCartProducts());
    }
  }, [isShowCart]);

  return (
    <section
      className={`text-black fixed z-10 top-[75px] w-[300px] shadow-xl h-screen bg-white shadow-gray-500 ${
        isShowCart && token ? "right-0" : "-right-full"
      } duration-300 p-2 grid grid-rows-[auto_1fr_auto]`}
    >
      <h2 className="text-lg font-bold">Shopping Cart</h2>
      {/* Productos del carrito */}
      <section className="overflow-y-auto grid gap-10 py-4 content-start">
        {products.map((product) => (
          <CartProducts key={product.id} product={product} />
        ))}
      </section>
      {/* Checkout */}
      <section className="grid grid-cols-2 py-10 border-t-[1px] boder-gray-400">
        <span className="text-gray-500">Total: </span>
        <h4 className="text-end font-bold ">$ {totalPrice}</h4>
        <button
          onClick={handleClickCheckout}
          className="w-full bg-red-500 mx-1 mb-[110px] mx-auto text-white font-semibold px-2 hover:bg-red-600 transition-colors rounded-sm p-2 hover:-translate-y-1 col-span-2"
        >
          Checkout
        </button>
      </section>
    </section>
  );
};

export default Cart;
