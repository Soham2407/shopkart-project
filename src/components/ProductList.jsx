import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="md:w-[90%] lg:w-[95%] mx-auto flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:items-start md:gap-x-14 lg:gap-x-20 lg:gap-y-12 xl:gap-x-10 mt-6">
      {products?.map((product) => (
        <ProductItem product={product} key={product?.id} />
      ))}
    </div>
  );
};

export default ProductList;
