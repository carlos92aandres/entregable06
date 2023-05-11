import axios from "axios";

export const axiosEcommerce = axios.create({
  baseURL: "https://e-commerce-api-v2.academlo.tech/api/v1/",
});

export const getConfig = () => {
    //funcion para poder pasar el endpoint encriptado, entonces usamos una función para no tener que reptir codigo
  return {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.token,
    },
  };
};
