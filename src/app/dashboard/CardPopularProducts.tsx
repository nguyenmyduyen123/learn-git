import { useGetProductsQuery } from "@/state/api";
import { ShoppingBag } from "lucide-react";
import React from "react";
import Rating from "../{component}/Rating";

export const CardPopularProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
      {isLoading ? (
        <div className="m-5">Loading</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">Products</h3>
          <hr />
          <div className="overflow-auto h-full">
            {products?.map((product) => {
              return (
                <div
                  className="flex items-center justify-between gap-3 px-5 py-7 border-b "
                  key={product.productId}
                >
                  <div className="flex items-center gap-3">
                    <div>image</div>
                    <div className="flex flex-col gap-1 justify-between">
                      <div className="font-bold text-gray-700">
                        {product.name}
                      </div>
                      <div className="flex text-sm items-center">
                        <span className="font-bold text-blue-500 text-xs">
                          ${product.price}
                        </span>
                        <span className="mx-2">|</span>
                        <Rating rating={product.rating || 0} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="p-2 rounded-full bg-blue-100 text-blue-600 m-2">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    {Math.round(product.stockQuantity / 1000)}k sold
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
