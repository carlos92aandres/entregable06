import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/home/ProductCard";
import { axiosEcommerce } from "../utils/configAxios";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [currentCategory, setCurrentCategory] = useState(0);

  const handleSubmit = (e) => {
    //formulario para atrapar el string que esté en el input
    e.preventDefault();
    const newProductName = e.target.productName.value;
    setProductName(newProductName);
  };
  //Buscador para los productos por nombre con un filtro además de las minúsculas para que haya siempre coincidencia

  const productsByName = useMemo(() => {
    //Memorización de la renderizacion condicional basada en products y productsName, entonces no se renderiza siempre que cargue la app
    return products.filter((product) =>
      product.title.toLowerCase().includes(productName.toLowerCase())
    );
  }, [products, productName]);

  const handleClickCategory = (e) => {
    //dataset es el valor por defecto para poder acceder al valor personalizado que pusimos
    setCurrentCategory(Number(e.target.dataset.category));
  };

  useEffect(() => {
    //efceto para traer las categorias de los productos
    axiosEcommerce
      .get("categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    //Efecto para traer los productos completos
    if(currentCategory === 0){
    axiosEcommerce
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
      }
  }, [currentCategory]);
  useEffect(() => {
    //efecto que trae el arreglo de las categorias
    if (currentCategory !== 0) {
      axiosEcommerce
        .get(`products?categoryId=${currentCategory}`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }
  }, [currentCategory]);

  return (
    <main className="px-2 mt-[75px] mb-8">
      <form onSubmit={handleSubmit} action="" className="">
        <div className="flex justify-center items-center min-w-[300px] min-h-[150px] rounded-md p-2">
          <input className="border-[1px] border-gray-500 rounded-sm h-[40px] w-[250px] "
            id="productName"
            placeholder="What are you looking for..."
            type="text"
          />
          <button>
            {" "}
            <i className="bx bx-search bg-red-500 text-white p-3 "></i>
          </button>
        </div>

        <ul className="flex justify-between mb-2 text-red-500 font-semibold mx-2 flex-wrap">
          <li
            className="cursor-pointer hover:-translate-y-1"
            onClick={handleClickCategory}
            data-category={0}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              className="cursor-pointer hover:-translate-y-1 hover:underline"
              onClick={handleClickCategory}
              data-category={category.id}
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </form>

      <section className="grid gap-8 py-2 sm:grid-cols-2 p-3">
        {productsByName.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
