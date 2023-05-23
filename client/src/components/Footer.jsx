import React from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className="w-full h-auto py-10 mt-10 flex flex-col lg:flex-row flex-wrap items-center justify-between">
      <div className="w-full h-[150px] lg:mb-3  lg:w-1/3 text-center px-14 lg:border-r-4 lg:border-r-orange-400 border-t-orange-400 border-t-4 rounded-lg">
        <p className="my-3 text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-8 before:h-1 before:-bottom-1 before:left-20 before:bg-gradient-to-tr mb-5 mt-5 from-orange-500 to-orange-600">
          Локація
        </p>
        <div className="text-sm lg:text-base text-textColor">
          вул. Карпатська, 15
        </div>
        <div className="text-sm lg:text-base text-textColor">
          м. Івано-Франківськ
        </div>
      </div>

      <div className="w-full h-[150px] lg:w-1/3 text-center flex items-center justify-center px-14 py-10 lg:py-0 lg:pb-10 mt-5 lg:mt-0 border-t-yellow-400 border-t-4 lg:border-t-0 lg:border-b-yellow-400 lg:border-b-4 rounded-lg">
        <Link to={"/"} className="flex items-center justify-center">
          <img src={Logo} className="w-16 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold italic">
            <span className="text-orange-500 italic">fast</span>Town
          </p>
        </Link>
      </div>

      <div className="w-full h-[150px] lg:mb-3 lg:w-1/3 text-center px-14 lg:border-l-4 lg:border-l-red-400 border-t-red-400 border-t-4 rounded-lg">
        <p className="my-3 text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-8 before:h-1 before:-bottom-1 before:left-25 before:right-20 before:bg-gradient-to-tr mb-5 mt-5 from-red-500 to-red-600">
          Соцмережі
        </p>

        <div className="w-full flex items-center justify-center">
          <div className="w-2/4 flex items-center justify-between">
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center w-[40px] h-[40px] border-2 border-red-600 rounded-md hover:bg-red-600 group"
              href=""
            >
              <FaFacebookF className="text-red-600 group-hover:text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center w-[40px] h-[40px] border-2 border-red-600 rounded-md hover:bg-red-600 group"
              href=""
            >
              <FaTwitter className="text-red-600 group-hover:text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center w-[40px] h-[40px] border-2 border-red-600 rounded-md hover:bg-red-600 group"
              href=""
            >
              <FaLinkedin className="text-red-600 group-hover:text-white" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
