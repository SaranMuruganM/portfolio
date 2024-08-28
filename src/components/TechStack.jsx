import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";

const TechStack = () => {
  const controls = useAnimation();
  return (
    <div className="grid grid-rows-2 justify-center text-center font-light text-white">
      <h1 className="self-center text-3xl lg:text-4xl">Tech Stack</h1>
      <div className="mt-4 flex justify-center gap-8">
        <div >
          <FaReact size={60} color="#3b82f6" />
        </div>
        <div >
          <IoLogoNodejs size={60} color="#417e38" />
        </div>
        <div >
          <SiMongodb size={60} color="#00ed64" />
        </div>
        <div>
          <IoLogoJavascript size={60} color="#f0db4f" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
