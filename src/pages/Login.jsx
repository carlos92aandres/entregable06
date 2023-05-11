import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { logOut, loginUser } from "../store/slices/userInfo.slice";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const { register, handleSubmit } = useForm();

  const { token, user } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(loginUser(data));
  };

  const handleClickLogout = () => {
    dispatch(logOut())
  };
  return (
    <main className="bg-gray-100 min-h-screen mt-[75px] grid place-content-center">
      {token ? (
        <section className="bg-white p-4 text-center rounded-md w-[280px] grid gap-5 shadow shadow-gray-500 ">
          <i className="bx bxs-user-circle text-7xl"></i>
          <h2 className="font-bold text-2xl text-center">Bienvenido de nuevo!</h2>
          <h3 className="font-semibold text-xl">
            {user?.firstName} {user?.lastName}
          </h3>
          <button
            onClick={handleClickLogout}
            className="bg-red-500  mx-auto text-white py-2 rounded-md w-[150px] hover:bg-red-700 hover:tracking-widest duration-200 transition-colors "
          >
            Logout
          </button>
        </section>
      ) : (
        <form
          onSubmit={handleSubmit(submit)}
          className="bg-white p-4 rounded-md max-w-[320px] grid gap-3 shadow shadow-gray-500"
        >
          <h2 className="text-2xl font-bold text-gray-700">
            Welcome! Enter your email and password to continue
          </h2>

          <section className="bg-indigo-200 grid gap-2 p-2 rounded-md">
            <h3 className="text-center font-bold">Test data</h3>

            <div className="flex gap-2 items-center text-gray-500">
              <i className="bx bx-envelope"></i>
              <span>john@gmail.com</span>
            </div>
            <div className="flex gap-2 items-center text-gray-500">
              <i className="bx bx-lock-alt"></i>
              <span>john1234</span>
            </div>
          </section>

          <div className="grid">
            <label className="text-gray-500" htmlFor="email">
              Email
            </label>
            <input
              className="outline-none border-b-[1px]"
              id="email"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="grid">
            <label className="text-gray-500" htmlFor="password">
              Password
            </label>
            <input
              className="outline-none border-b-[1px]"
              id="password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
          </div>

          <button className="bg-red-500 p-2 rounded-md text-white px-2 hover:bg-red-700 hover:tracking-widest duration-200 transition-colors ">
            Login
          </button>
          <span className="text-center py-1">
            Don´t have an account?{" "}
            <Link className="text-indigo-500 hover:underline" to="#">
              Sing up
            </Link>
          </span>
        </form>
      )}
    </main>
  );
};

export default Login;
