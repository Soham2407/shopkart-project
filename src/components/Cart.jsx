import React, { useMemo, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";

const Cart = ({ cartItems, setCartItems }) => {
  const [activeCart, setActiveCart] = useState(false);

  const totalQuantity = useMemo(() => {
    return cartItems?.reduce((acc, curr) => {
      acc = acc + curr.quantity;
      return acc;
    }, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems?.reduce((acc, curr) => {
      acc = acc + curr.price * curr.quantity;
      return acc;
    }, 0);
  }, [cartItems]);

  return (
    <>
      <div
        className={`fixed w-full md:w-[45vw] lg:w-[36vw] xl:w-[24vw] top-0 right-0 h-full z-10 bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-200 ease-in-out`}
      >
        <div className="flex justify-between items-center my-3 px-4">
          <h2 className="font-bold text-lg">My Order</h2>
          <IoCloseCircleOutline
            onClick={() => setActiveCart(false)}
            className="cursor-pointer"
          />
        </div>

        <div className="px-2 h-[600px] overflow-y-auto">
          {cartItems?.map((item) => (
            <CartItem
              item={item}
              key={item?.id}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>

        <div className="absolute w-full bottom-0 mb-2 px-4">
          <p className="font-semibold text-gray-800">Items: {totalQuantity}</p>
          <p className="font-semibold text-gray-800">
            Total Ammount: ${totalPrice.toFixed(2)}
          </p>
          <hr className="my-2" />
          <button className="w-full p-2 bg-blue-500 text-white cursor-pointer rounded-lg">
            Checkout
          </button>
        </div>
      </div>

      <div
        className={`bg-slate-300 p-3 cursor-pointer rounded-full w-fit flex justify-center items-center fixed right-6 bottom-4 ${
          cartItems.length > 0 ? "animate-bounce delay-200" : "animate-none"
        } transition-all`}
      >
        <FaShoppingCart
          sx={{ fontSize: 30 }}
          onClick={() => setActiveCart(true)}
        />
      </div>
    </>
  );
};

export default Cart;
