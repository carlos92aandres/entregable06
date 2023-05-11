import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { changeIsShowCart } from "../../store/slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { token } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickChangeShowCart = () => {
    if (!token) return navigate("/login")
    dispatch(changeIsShowCart());
  };
  return (
    <section className="flex justify-between items-center w-screen  h-[75px] shadow-sm shadow-gray-600 fixed z-10 top-0 bg-white">
      <Link to="/">
        <h1 className="p-2 mx-2 font-bold text-2xl text-blue-900/90 hover:text-red-500 transition-colors duration-200">
          Andres-commerce
        </h1>
      </Link>
      <nav className=" p-2 text-2xl flex gap-4 md:gap-10 mx-4 ms:min-w-screen ">
        <Link to="/login">
          <i className="bx bx-user sm:p-[14px]  hover:-translate-y-1 duration-200 hover:text-red-500 "></i>
        </Link>
        <Link to="/purchases">
          <i className="bx bx-box sm:p-[14px]  hover:-translate-y-1 duration-200 hover:text-red-500 "></i>
        </Link>
        <button onClick={handleClickChangeShowCart}>
          <i className="bx bx-cart sm:p-[14px]  hover:-translate-y-1 duration-200 hover:text-red-500 "></i>
        </button>
      </nav>
    </section>
  );
};

export default Header;
