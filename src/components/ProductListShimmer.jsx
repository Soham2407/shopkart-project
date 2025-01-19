import ProductItemShimmer from "./ProductItemShimmer";

const ProductListShimmer = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center md:items-start md:gap-x-14 lg:justify-start lg:gap-x-20 lg:gap-y-12 xl:gap-x-10 mt-6">
      {Array.from({ length: 15 })?.map((_, index) => (
        <ProductItemShimmer key={index} />
      ))}
    </div>
  );
};

export default ProductListShimmer;
