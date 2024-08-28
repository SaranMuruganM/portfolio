import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TechStack from "./components/TechStack";
import {motion} from "framer-motion"
import Projects from "./components/Projects";
const App = () => {
  return (
    <>
      <div className="fixed h-full w-full -z-10 flex items-center justify-center">
        <div className="absolute inset-0 -z-10 h-[100vh] w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <motion.img
          initial={{ y: 8 }}
          animate={{ y: -8 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "linear",
          }}
          src="./src/assets/cpu.png"
          alt="cpu"
          className="-z-0 absolute"
        />
      </div>
      <div className="container mx-auto px-8 min-h-[100vh]">
        <NavBar />
        <Hero />
        <TechStack />
        <Projects/>
      </div>
    </>
  );
};

export default App;
