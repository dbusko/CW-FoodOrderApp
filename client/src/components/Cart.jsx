import { motion } from "framer-motion";
import React from "react";
import { buttonClick, slideIn } from "../animations";
import { setCartOff } from "../context/actions/displayCartAction";
import { BiChevronsRight, FcClearFilters } from "../assets/icons";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  return (
    <motion.div
      {...slideIn}
      className="fixed z-50 top-0 right-0 w-300 md:w-508 bg-lightOverlay backdrop-blur-md shadow-md h-screen"
    >
      <div className="w-full flex items-center justify-between py-4 pb-12 px-6">
        <motion.i
          {...buttonClick}
          className="cursor-pointer"
          onClick={() => dispatch(setCartOff())}
        >
          <BiChevronsRight className="text-[50px] text-textColor" />
        </motion.i>
        <p className="text-2xl text-headingColor font-semibold">Your Cart</p>
        <motion.i {...buttonClick} className="cursor-pointer">
          <FcClearFilters className="text-[30px] text-textColor" />
        </motion.i>
      </div>
    </motion.div>
  );
};

export default Cart;
