import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

const ProductItem = ({ product, cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const { title, description, price, rating, thumbnail, id } = product;

  const addToCartHandler = () => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) {
      const updatedCarts = cartItems?.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCarts);
    } else {
      setCartItems((prev) => [...prev, product]);
    }
  };

  return (
    <div className="w-72 lg:w-64 h-[380px] border rounded-lg overflow-hidden shadow-lg relative hover:scale-105 cursor-pointer transition-all ease-in-out">
      <img
        className="w-full h-40"
        src={thumbnail}
        alt={title}
        onClick={() =>
          navigate(`/product/${id}`, { state: { product: product } })
        }
      />
      <div className="my-2 px-2">
        <p className="font-semibold text-xl">{title}</p>
        <p className="mt-2">
          {description.slice(0, 30)}...
          <span
            className="text-blue-500 underline"
            onClick={() =>
              navigate(`/product/${id}`, { state: { product: product } })
            }
          >
            Read More
          </span>
        </p>
      </div>
      <div className="w-full flex justify-between items-center mt-2 px-2 absolute bottom-12">
        <p className="font-medium text-lg">${price}</p>
        <Rating readOnly defaultValue={rating} precision={0.5} />
      </div>
      <button
        className="bg-blue-500 text-white w-full py-2 absolute bottom-0"
        onClick={addToCartHandler}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItem;
