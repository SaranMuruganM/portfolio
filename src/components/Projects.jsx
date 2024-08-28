import React,{useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectHero } from "../assets/projectHero";
const Projects = () => {
   const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="mt-[20vh] h-[200vh] text-white"
    >
      <h1 className="mb-20 text-center text-3xl font-light lg:text-4xl">
        Projects
      </h1>
      {projectHero.map((project) => {
        return (
          <a
            key={project.id}
            href={project.url}
            target={"_blank"}
            className="tech-stack-styling mt-10 grid gap-8 border-2 p-4 text-sm text-white backdrop-blur-md md:grid-cols-2 md:text-lg"
          >
            <img src={project.img} alt="img" className="h-full w-full" />
            <div className="grid gap-4">
              <h1 className="text-2xl font-bold tracking-wider">
                {project.name}
              </h1>
              <h1>{project.description}</h1>
              <div className="flex items-center gap-4">
                {project.techStack.map((tech) => (
                  <h1
                    key={project.name}
                    className="tech-stack-styling-inverse border-2 px-4 py-1 text-xs font-light md:border-4 md:text-lg"
                  >
                    {tech}
                  </h1>
                ))}
              </div>
            </div>
          </a>
        );
      })}
    </motion.div>
  );
};

export default Projects;
