import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Resume from '../assets/saranm.pdf'
const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-6 text-white">
      <h1 className="md:text-xl md:tracking-wide">SARAN M</h1>
      <div className="flex items-center gap-3 md:gap-5 md:text-xl md:tracking-wide">
        <div className="hidden items-center md:flex md:gap-5 md:text-lg md:tracking-wide">
          <a href="https://github.com/SaranMuruganM" target={"_blank"}>
            <FaGithub className="hover:cursor-pointer" size={25} />
          </a>
          <a href="" target={"_blank"}>
            <FaLinkedin className="hover:cursor-pointer" size={25} />
          </a>
        </div>
        <a
          href={Resume}
          target={"_blank"}
          className="border-styling block border-2 border-solid p-1 px-2"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default NavBar;
