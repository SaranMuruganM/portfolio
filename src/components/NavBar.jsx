import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-6 text-white">
      <h1 className="md:text-xl md:tracking-wide">SARAN M</h1>
      <div className="flex items-center gap-3 md:gap-5 md:text-xl md:tracking-wide">
        <div className="hidden items-center gap-3 md:flex md:gap-5 md:text-lg md:tracking-wide">
          <FaGithub className="hover:cursor-pointer" size={25} />
          <FaLinkedin className="hover:cursor-pointer" size={25} />
          <button className="border-styling border-2 border-solid p-1 px-2">
            Resume
          </button>
        </div>
        <button className="border-styling block border-2 border-solid p-1 px-2 md:hidden">
          Resume
        </button>
      </div>
    </div>
  );
};

export default NavBar;
