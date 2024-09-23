import React, { useState } from "react";
import { projectHero } from "../assets/projectHero";
import cpu from '../assets/cpu.png'

const Projects = () => {
  return (
    <div
      className="mb-16 mt-[20vh] p-4 text-white lg:p-4"
    >
      <h1 className="mb-10 text-center text-2xl font-light lg:text-3xl">
        &lt; Projects &gt;
      </h1>
      {projectHero.map((project) => (
        <a
          key={project.id}
          href={project.url}
          target={"_blank"}
          rel="noopener noreferrer"
          className="tech-stack-styling mt-10 grid gap-8 border-2 p-4 text-sm text-white backdrop-blur-lg md:text-lg lg:grid-cols-2"
        >
          <img
            src={project.img}
            alt={project.name}
            className="h-full w-full"
        
          />
          <div className="grid gap-4">
            <h1 className="text-xl font-bold tracking-wider">{project.name}</h1>
            <h1 className="text-base leading-relaxed">{project.description}</h1>
            <div className="flex flex-wrap items-center gap-4">
              {project.techStack.map((tech) => (
                <h1
                  key={tech}
                  className="tech-stack-styling-inverse border-2 px-4 py-1 text-xs font-light md:border-2 md:text-base"
                >
                  {tech}
                </h1>
              ))}
            </div>
          </div>
        </a>
      ))}
      <h1 className="mt-10 text-center text-2xl font-light lg:text-3xl">
        &lt;/Projects&gt;
      </h1>
    </div>
  );
};

export default Projects;
