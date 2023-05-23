import React from "react";
import { BannerPhoto } from "../assets";

const About = () => {
  return (
    <section className="w-full my-6" id="aboutUs">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-8 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Про Нас
        </p>

        <div className="py-5 flex items-center flex-col md:flex-row">
          <img
            src={BannerPhoto}
            className="h-auto wfull md:w-2/4 rounded-lg drop-shadow-lg"
            alt="AboutPicture"
          />
          <div className="md:pl-20">
            <p className="py-10 md:py-0 md:mb-10 text-center md:text-left font-semibold text-2xl">
              Хто ми?
            </p>
            <p className="pb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              maiores rerum excepturi harum quos molestiae odio reiciendis
              doloribus ducimus omnis, totam accusamus. Dolorum magni sunt eum
              ducimus? Eius, repellendus nisi. Alias maiores rerum excepturi
              harum quos molestiae odio reiciendis doloribus ducimus omnis,
              totam accusamus. Dolorum magni sunt eum ducimus? Eius, repellendus
              nisi. Alias maiores rerum excepturi harum quos molestiae odio
              reiciendis doloribus ducimus omnis, totam accusamus. Dolorum magni
              sunt eum ducimus? Eius, repellendus nisi.
            </p>
            <abbr title="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              maiores rerum excepturi harum quos molestiae odio reiciendis.
            </abbr>
            <marquee
              className="mt-5"
              bgcolor="#ccc"
              loop="-1"
              scrollamount="5"
              width="100%"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              maiores rerum excepturi harum quos molestiae odio reiciendis.
            </marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
