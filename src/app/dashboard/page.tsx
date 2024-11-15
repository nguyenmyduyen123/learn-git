"use client";
import { useGetProductsQuery } from "@/state/api";
import React from "react";
import { CardPopularProducts } from "./CardPopularProducts";
import CardSalesSummary from "./CardSalesSummary";

const Dashboard = () => {
  const { data: products } = useGetProductsQuery();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500">
        Dashboard 3
      </div>
      <div className="row-span-3 bg-gray-500">Dashboard 4</div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500">Dashboard 5</div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500">Dashboard 6</div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500">Dashboard 7</div>
    </div>
  );
};

export default Dashboard;
