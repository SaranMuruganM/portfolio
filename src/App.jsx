import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TechStack from "./components/TechStack";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import cpu from "./assets/cpuformatted.png";

const App = () => {
  return (
    <div className="bg-black grid">
      <div className="fixed min-h-dvh min-w-[100vw] flex items-center justify-center z-0" >

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
        className="-z-2"
        />
        </div>
      <div className="container z-10 mx-auto min-h-[100vh] md:px-8 px-4">
        <NavBar />
        <Hero />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
};

export default App;
