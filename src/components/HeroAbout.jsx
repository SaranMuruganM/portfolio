import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { motion } from "framer-motion";
const HeroAbout = ({ aname }) => {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 100, opacity: 0 }}
      transition={{ type: "tween", duration: 0.5, delay: 0 }}
      className="mt-5 flex items-center gap-5 "
    >
      <TiTickOutline color="#64748b" size={40} strokeWidth={0.1} />
      <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent lg:text-3xl">
        {aname}
      </span>
    </motion.div>
  );
};

export default HeroAbout;
