import React, { useEffect, useMemo, useState } from "react";
import ProductList from "../components/ProductList";
import ProductListShimmer from "../components/ProductListShimmer";
import CategoryMenus from "../components/CategoryMenus";
import Cart from "../components/Cart";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setsearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const filterProducts = useMemo(() => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, products]);

  const getCategoryList = async () => {
    setLoading(true);
    const res = await fetch("https://dummyjson.com/products/category-list");
    const data = await res.json();
    setLoading(false);
    setCategories(data);
  };

  const getProducts = async () => {
    let res;
    setLoading(true);
    if (selectedCategory) {
      res = await fetch(
        `https://dummyjson.com/products/category/${selectedCategory}`
      );
    } else {
      res = await fetch("https://dummyjson.com/products");
    }
    const data = await res.json();
    const transformProducts = data?.products?.map((product) => ({
      ...product,
      quantity: 1,
    }));
    setLoading(false);
    setProducts(transformProducts);
  };

  useEffect(() => {
    getProducts();
  }, [selectedCategory]);

  useEffect(() => {
    getCategoryList();
  }, []);

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

      {/* Categories */}
      <div className="my-6">
        {
          <CategoryMenus
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        }
      </div>

      {/* products */}
      {loading ? (
        <ProductListShimmer />
      ) : (
        <ProductList
          products={filterProducts}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}

      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </main>
  );
};

export default Home;
