import React,{useEffect} from "react";
import { motion, useAnimation } from "framer-motion";

import { projectHero } from "../assets/projectHero";
const Projects = () => {

  return (
    <div
      className="mt-[20vh] mb-16 text-white "
    >
      <h1 className="mb-20 text-center text-3xl font-light lg:text-3xl">
        Projects
      </h1>
      {projectHero.map((project) => {
        return (
          <a
            key={project.id}
            href={project.url}
            target={"_blank"}
            className="tech-stack-styling mt-10 grid gap-8 border-2 p-4 text-sm text-white backdrop-blur-lg md:grid-cols-2 md:text-lg"
          >
            <img src={project.img} alt="img" className="h-full w-full" />
            <div className="grid gap-4">
              <h1 className="text-xl font-bold tracking-wider">
                {project.name}
              </h1>
              <h1 className="text-base leading-relaxed">{project.description}</h1>
              <div className="flex items-center gap-4 flex-wrap">
                {project.techStack.map((tech) => (
                  <h1
                    key={project.name} 
                    className="tech-stack-styling-inverse border-2 px-4 py-1 text-xs font-light md:border-2 md:text-base"
                  >
                    {tech}
                  </h1>
                ))}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Projects;
