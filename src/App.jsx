import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TechStack from "./components/TechStack";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import cpu from "./assets/cpuformatted.png";

const App = () => {
  return (
    <div className="grid bg-black">
      <div className="fixed left-0 top-0 z-0 flex min-h-dvh min-w-[100vw] items-center justify-center">
        <motion.img
          initial={{ y: 8 }}
          animate={{ y: -8 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "linear",
          }}
          src={cpu}
          alt="Animated CPU graphic"
          className="h-[100px] w-[150px] sm:h-[80px] sm:w-[120px] md:h-[150px] md:w-[200px]"
        />
      </div>

      <div className="container z-10 mx-auto min-h-dvh px-4 lg:px-10">
        <NavBar />
        <Hero />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
};

export default App;
