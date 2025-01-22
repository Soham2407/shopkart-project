import React, { useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItem from "./CartItem";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  return (
    <>
      <div
        className={`fixed w-full md:w-[45vw] lg:w-[36vw] xl:w-[24vw] top-0 right-0 h-full z-10 bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-200 ease-in-out`}
      >
        <div className="flex justify-between items-center my-3 px-4">
          <h2 className="font-bold text-lg">My Order</h2>
          <CancelOutlinedIcon
            onClick={() => setActiveCart(false)}
            className="cursor-pointer"
          />
        </div>

        <div className="px-2">
          <CartItem />
        </div>

        <div className="absolute w-full bottom-0 mb-2 px-4">
          <p className="font-semibold text-gray-800">Items: 0</p>
          <p className="font-semibold text-gray-800">Total Ammount: 0</p>
          <hr className="my-2" />
          <button className="w-full p-2 bg-blue-500 text-white cursor-pointer rounded-lg">
            Checkout
          </button>
        </div>
      </div>

      <div className="bg-slate-300 p-3 cursor-pointer rounded-full w-fit flex justify-center items-center fixed right-6 bottom-4 animate-bounce delay-200 transition-all">
        <ShoppingCartIcon
          sx={{ fontSize: 30 }}
          onClick={() => setActiveCart(true)}
        />
      </div>
    </>
  );
};

export default Cart;
