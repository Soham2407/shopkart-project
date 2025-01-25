import React, { useMemo, useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, DialogContent, Typography } from "@mui/material";
import CartItem from "./CartItem";
import Modal from "./Modal";

const Cart = ({ cartItems, setCartItems }) => {
  const [activeCart, setActiveCart] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setActiveCart(false);
    setCartItems([]);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
      {open && (
        <Modal open={open} handleClose={handleClose}>
          <DialogContent dividers>
            <Typography variant="h3" m={4} gutterBottom>
              Thanks for Shopping!
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
              Have great day!
            </Typography>
            <div className="text-center mt-4">
              <Button variant="contained" onClick={handleClose}>
                Continue to Shopping
              </Button>
            </div>
          </DialogContent>
        </Modal>
      )}

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
          <button
            className="w-full p-2 bg-blue-500 text-white cursor-pointer rounded-lg"
            onClick={handleClickOpen}
          >
            Checkout
          </button>
        </div>
      </div>

      <div
        className={`bg-slate-300 p-3 cursor-pointer rounded-full w-fit flex justify-center items-center fixed right-6 bottom-4 ${
          cartItems.length > 0 ? "animate-bounce delay-200" : "animate-none"
        } transition-all`}
      >
        <ShoppingCartIcon
          sx={{ fontSize: 30 }}
          onClick={() => setActiveCart(true)}
        />
      </div>
    </>
  );
};

export default Cart;
