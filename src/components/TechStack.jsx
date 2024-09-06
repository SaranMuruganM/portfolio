import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";

const TechStack = () => {

  return (
    <div className="grid grid-rows-3 justify-center text-center font-light text-white">
      <h1 className="self-center text-2xl lg:text-3xl">&lt;Tech Stack&gt;</h1>
      <div className="*:tech-stack-styling-inverse mt-4 flex justify-center gap-6 *:p-2 *:backdrop-blur-lg md:gap-8">
        <FaReact
          color="#3b82f6"
          className="h-16 w-16 md:h-[70px] md:w-[70px]"
        />

        <IoLogoNodejs
          color="#417e38"
          className="h-16 w-16 md:h-[70px] md:w-[70px]"
        />

        <SiMongodb
          color="#00ed64"
          className="h-16 w-16 md:h-[70px] md:w-[70px]"
        />

        <IoLogoJavascript
          color="#f0db4f"
          className="h-16 w-16 md:h-[70px] md:w-[70px]"
        />
      </div>
      <h1 className="mt-6 self-center text-2xl lg:text-3xl">
        &lt;/Tech Stack&gt;
      </h1>
    </div>
  );
};

export default TechStack;
