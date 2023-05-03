import React from "react";
import { Header } from "../components";
import { buttonClick } from "../animations";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "../assets/icons";
import { motion } from "framer-motion";
import { SuccessPayImage } from "../assets";

const SuccessPayments = () => {
  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col">
      <Header />
      <div className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <img src={SuccessPayImage} className="w-full md:w-656" alt="" />
        <h1 className="font-bold text-headingColor text-[50px]">
          Amount paid Successfully
        </h1>
        <motion.div {...buttonClick}>
          <NavLink
            to={"/"}
            className="flex items-center justify-center gap-4 cursor-pointer text-2xl text-textColor font-semibold px-4 py-2 rounded-md border border-gray-300 hover:shadow-md"
          >
            <FaArrowLeft className="text-3xl text-textColor" /> Get back to Home
          </NavLink>
        </motion.div>
      </div>
    </main>
  );
};

export default SuccessPayments;
