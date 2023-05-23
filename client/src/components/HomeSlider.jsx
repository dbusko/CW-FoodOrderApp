import { motion } from "framer-motion";
import React from "react";
import Slider from "./Slider";

const HomeSlider = () => {
  return (
    <motion.div className="w-full flex items-start justify-start flex-col">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Наші свіжі & здорові фрукти
          </p>
        </div>
      </div>
      <Slider />
    </motion.div>
  );
};

export default HomeSlider;
