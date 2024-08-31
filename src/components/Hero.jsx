import React from "react";
import HeroAbout from "./HeroAbout";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 text-white lg:-mt-20 h-screen mt-16 place-items-center">
      <div>
        <motion.h1
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ type: "tween", duration: 0.5 }}
          className="md:pb-10 text-5xl font-thin tracking-tight  lg:text-7xl pb-6"
        >
          Saran M
        </motion.h1>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl tracking-tight "
        >
          Full Stack Developer
        </motion.div>
      </div>
      <div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
          className=" lg:text-2xl text-2xl tracking-wider  font-light mt-16"
        >
          ABOUT ME
        </motion.div>
        <HeroAbout aname={"Fresher"} />
        <HeroAbout aname={"MERN Stack"} />
        <HeroAbout aname={" 3 - Frontend Projects"} />
        <HeroAbout aname={"1 - Full Stack Project"} />
        <HeroAbout aname={"Built REST API's"} />
      </div>
    </div>
  );
};

export default Hero;
