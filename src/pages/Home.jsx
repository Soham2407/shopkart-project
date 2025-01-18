import React, { useEffect, useMemo, useState } from "react";
import ProductList from "../components/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");

  const filterProducts = useMemo(() => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, products]);

  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data?.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(filterProducts);

  return (
    <main className="my-2 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
        <h2 className="text-2xl font-semibold">Welcome User</h2>
        <input
          type="search"
          name="search"
          placeholder="Search..."
          className="border p-2 w-72 text-lg lg:w-[25rem] rounded-lg"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
      </div>
      <ProductList products={filterProducts} />
    </main>
  );
};

export default Home;
