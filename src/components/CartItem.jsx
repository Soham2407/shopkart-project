import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

const CartItem = ({ item, cartItems, setCartItems }) => {
  const deleteCartItemHandler = (id) => {
    const updatedCart = cartItems.filter((product) => product?.id !== id);
    setCartItems(updatedCart);
  };

  const incrementQuantity = (id) => {
    const updatedCart = cartItems?.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });
    setCartItems(updatedCart);
  };

  const decrementQuantity = (id) => {
    const updatedCart = cartItems?.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : 1,
        };
      } else {
        return product;
      }
    });
    setCartItems(updatedCart);
  };

  return (
    <div className="w-full shadow-md p-4 flex gap-2">
      <div>
        <img className="w-16 h-16 rounded-full" src={item?.thumbnail} />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <p>{item?.title}</p>
          <DeleteOutlinedIcon
            className="cursor-pointer text-red-500"
            onClick={() => deleteCartItemHandler(item?.id)}
          />
        </div>
        <div className="flex justify-between items-center mt-1">
          <p>${item?.price}</p>
          <div className="flex items-center gap-1">
            <IndeterminateCheckBoxOutlinedIcon
              className="cursor-pointer text-gray-500"
              sx={{ fontSize: 28 }}
              onClick={() => {
                decrementQuantity(item.id);
              }}
            />
            <p>{item?.quantity}</p>
            <AddBoxOutlinedIcon
              className="cursor-pointer text-gray-500"
              sx={{ fontSize: 28 }}
              onClick={() => {
                incrementQuantity(item.id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
