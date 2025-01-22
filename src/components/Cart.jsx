import React from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="fixed w-full md:w-[45vw] lg:w-[36vw] xl:w-[24vw] top-0 right-0 h-full bg-white">
      <div className="flex justify-between items-center my-3 px-4">
        <h2 className="font-bold text-lg">My Order</h2>
        <CancelOutlinedIcon className="cursor-pointer" />
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
  );
};

export default Cart;
