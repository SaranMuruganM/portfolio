import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";

const TechStack = () => {

  return (
    <div className="grid grid-rows-2 justify-center text-center font-light text-white">
      <h1 className="self-center text-3xl lg:text-4xl">Tech Stack</h1>
      <div className="*:tech-stack-styling-inverse mt-4 flex justify-center gap-3 md:gap-8 *:p-2 *:backdrop-blur-lg">
        <FaReact size={70} color="#3b82f6" />

        <IoLogoNodejs size={70} color="#417e38" />

        <SiMongodb size={70} color="#00ed64" />

          <IoLogoJavascript size={70} color="#f0db4f" />
  
      </div>
    </div>
  );
};

export default TechStack;
