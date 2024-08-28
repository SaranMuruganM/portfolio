import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";

const TechStack = () => {
  const controls = useAnimation();

  useEffect(() => {
    const waveAnimation = async () => {
      await controls.start((i) => ({
        y: [0, -20, 0],
        transition: {
          y: {
            duration: 1,
            yoyo: Infinity,
            ease: "easeInOut",
            delay: i * 0.2, // Stagger effect for each icon
          },
        },
      }));
    };
    waveAnimation();
  }, [controls]);

  return (
    <div className="grid grid-rows-2 justify-center text-center font-light text-white">
      <h1 className="self-center text-3xl lg:text-4xl">Tech Stack</h1>
      <div className="mt-4 flex justify-center gap-8">
        <motion.div custom={0} animate={controls}>
          <FaReact size={60} color="#3b82f6" />
        </motion.div>
        <motion.div custom={1} animate={controls}>
          <IoLogoNodejs size={60} color="#417e38" />
        </motion.div>
        <motion.div custom={2} animate={controls}>
          <SiMongodb size={60} color="#00ed64" />
        </motion.div>
        <motion.div custom={3} animate={controls}>
          <IoLogoJavascript size={60} color="#f0db4f" />
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
