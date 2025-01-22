import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

const CartItem = () => {
  return (
    <div className="w-full shadow-md p-4 flex gap-2">
      <div>
        <div className="w-16 h-16 rounded-full bg-gray-400"></div>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <p>Eyeshadow Palette with Mirror</p>
          <DeleteOutlinedIcon className="cursor-pointer text-red-500" />
        </div>
        <div className="flex justify-between items-center mt-1">
          <p>130</p>
          <div className="flex items-center gap-1">
            <IndeterminateCheckBoxOutlinedIcon
              className="cursor-pointer text-gray-500"
              sx={{ fontSize: 28 }}
            />
            <p>1</p>
            <AddBoxOutlinedIcon
              className="cursor-pointer text-gray-500"
              sx={{ fontSize: 28 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
