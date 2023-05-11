import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosEcommerce, getConfig } from "../utils/configAxios";
import PurchaseCard from "../components/purchases/PurchaseCard";

export const Purchsases = () => {
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    //como pasar la configuracion para apis no autorizadas
    axiosEcommerce

      .get("purchases", getConfig())
      .then((res) => {
        //ordenando por fechas de compra más reciente a la más antigua
        const orderPurchases = res.data.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPurchases(orderPurchases);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="mt-[85px] px-2 max-w-[1000px] mx-auto">
      <section className="flex gap-2 items-center mx-4  my-6 ">
        <Link
          to="/"
          className="font-semibold hover:text-red-500 hover:-translate-y-1"
        >
          Home
        </Link>
        <div className="h-[7px] aspect-square rounded-full bg-red-500 "></div>
        <span className="font-bold">Purchases</span>
      </section>

      <section className="grid gap-10 py-6">
        {purchases.map((purchase) => (
          <PurchaseCard key={purchase.id} purchase={purchase} />
        ))}
      </section>
    </main>
  );
};
