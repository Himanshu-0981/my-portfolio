import { FaEye, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

import TopHeading from "../components/TopHeading";
import ProjectCards from "../components/ProjectCard";
import Button from "../components/Button";
import { projectsData } from "../data/projectsData";

function Projects() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };

  return (
    <div id="projects">
      <TopHeading title="MY PROJECTS" styleClass="pt-5" />

      <div className="flex justify-center items-center  mt-10">
        <div className="w-[80rem] flex justify-center flex-wrap gap-4">
          {projectsData.map((project, index) => (
            <section className="hover:scale-105 duration-300">
              <motion.section
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                key={index}
              >
                <ProjectCards
                  title={project.title}
                  src={project.src}
                  description={project.description}
                  visit={
                    <Button
                      title="Preview"
                      bg="bg-[#808dad68] text-white mr-1"
                      others="hover:bg-color_white hover:text-color_black mt-10"
                      icon={<FaEye />}
                    />
                  }
                  github={
                    <Button
                      title="Github"
                      bg="bg-[#808dad68] text-white ml-1"
                      others="hover:bg-color_white hover:text-color_black mt-10"
                      icon={<FaCode />}
                    />
                  }
                />
              </motion.section>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
