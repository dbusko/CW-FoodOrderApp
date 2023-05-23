import React from "react";
import { motion } from "framer-motion";
import { serviceData } from "../utils/styles";

const Services = () => {
  return (
    <section className="w-full my-6">
      <div className="w-full flex flex-col items-center justify-center">
        <p
          className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-4 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto"
          id="services"
        >
          Послуги
        </p>

        {/* <div className="py-5 flex items-center justify-between flex-col md:flex-row">
                    <div class="w-[200px] h-[150px] mx-2 text-center border border-slate-500 rounded-sm">
                        <img src={FastDelivery } className="w-full h-full overflow-hidden rounded-2xl" alt="" />
                        <p className="text-textColor font-semibold text-base md:text-lg pt-5">Fast Shipping</p>
                    </div>
                </div> */}
        <div className="w-full flex justify-center items-center flex-wrap md:flex-row py-5">
          {serviceData &&
            serviceData.map((n) => (
              <motion.div
                key={n.id}
                whileHover={{ scale: 0.9 }}
                className="group w-[220px] h-[200px] min-w-[180px] mx-2 my-4 lg:mx-1 lg:my-1 bg-primary rounded-lg backdrop-blur-lg drop-shadow-2xl flex flex-col items-center justify-center mt-5 md:mt-0"
              >
                <div className="w-full flex items-center justify-center">
                  <div className="w-full h-full flex justify-center items-center rounded-lg">
                    <img
                      src={n.imageSrc}
                      alt=""
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                </div>

                <div className="w-full mt-2 text-center">
                  <p className="text-lg font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 group-hover:before:left-20 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                    {n.name}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
