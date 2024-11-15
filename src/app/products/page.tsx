"use client";
import { useGetProductsQuery } from "@/state/api";
import React from "react";

const Products = () => {
  const { data: products } = useGetProductsQuery();
  console.log({ products });
  return <div>Products</div>;
};

export default Products;
