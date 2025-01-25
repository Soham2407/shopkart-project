import ProductItem from "./ProductItem";

const ProductList = ({ products, cartItems, setCartItems }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center md:items-start md:gap-x-14 lg:justify-start lg:gap-x-20 lg:gap-y-12 xl:gap-x-10 mt-6">
      {products?.map((product) => (
        <ProductItem
          product={product}
          key={product?.id}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
};

export default ProductList;
