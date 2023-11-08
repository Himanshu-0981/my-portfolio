import { motion } from "framer-motion";

import TopHeading from "./TopHeading";
import TechStack from "./TechStack";

import htmlIcon from "../assets/icons8-html-5.svg";
import cssIcon from "../assets/icons8-css.svg";
import tailwindIcon from "../assets/icons8-tailwind-css.svg";
import jsIcon from "../assets/icons8-javascript.svg";
import reactIcon from "../assets/icons8-react-native.svg";
import nextJsIcon from "../assets/nextjs.png";
import reduxIcon from "../assets/icons8-redux.svg";

import nodeJsIcon from "../assets/nodejs.png";
import expressIcon from "../assets/express.png";
import mongoDBIcon from "../assets/mongodb-icon.svg";
import mongooseIcon from "../assets/icons8-mongoose.svg";
// import firebaseIcon from "../assets/icons8-firebase.svg";

import vsCodeIcon from "../assets/icons8-vs-code.svg";
import gitIcon from "../assets/icons8-git.svg";
import githubIcon from "../assets/icons8-github.svg";
import postmanIcon from "../assets/icons8-postman.svg";

import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  const [themeState] = useTheme();

  return (
    <>
      <main className=" p-3  sm:p-5 w-450:p-20 md:p-20 flex flex-col items-center justify-center mt-20">
        <section
          className={`${
            themeState
              ? "bg-dark-transparent duration-300 border-[#bdc1c600]"
              : "border border-color_dark_blue  duration-300  "
          } rounded-lg pb-10 pt-5 pr-2 pl-2 xs:pr-5 xs:pl-5 sm:pr-32 sm:pl-32 md:pr-40 md:pl-40 2xl:pl-96 2xl:pr-96`}
        >
          <TopHeading
            title="Tech Stack"
            styleClass={`${themeState ? " color_dark_blue" : ""}`}
          />
          <TopHeading
            title="Technology that i've been worked on"
            styleClass={"no-underline text-[10px] sm:text-base font-normal"}
          />
          <motion.section
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center space-x-[2px] w-440:space-x-2 sm:space-x-3 md:space-x-5"
          >
            <TechStack title={"Html"} icon={htmlIcon} />
            <TechStack title={"Css"} icon={cssIcon} />
            <TechStack title={"Tailwind"} icon={tailwindIcon} />
            <TechStack title={"Javascript"} icon={jsIcon} />
            <TechStack title={"ReactJS"} icon={reactIcon} />
            <TechStack title={"NextJS"} icon={nextJsIcon} />
            {/* <TechStack title={"Redux"} icon={reduxIcon} /> */}
          </motion.section>

          <motion.section
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center space-x-1 w-440:space-x-2 sm:space-x-3 md:space-x-5 "
          >
            <TechStack title={"NodeJS "} icon={nodeJsIcon} />
            <TechStack title={"ExpressJS "} icon={expressIcon} />
            <TechStack title={"MongoDB"} icon={mongoDBIcon} />
            <TechStack title={"Mongoose"} icon={mongooseIcon} />
            <TechStack title={"Redux"} icon={reduxIcon} />
          </motion.section>

          <motion.section
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center space-x-1 w-440:space-x-2 sm:space-x-3 md:space-x-5"
          >
            <TechStack title={"Vs Code"} icon={vsCodeIcon} />
            <TechStack title={"Git"} icon={gitIcon} />
            <TechStack title={"Github"} icon={githubIcon} />
            <TechStack title={"Postman"} icon={postmanIcon} />
          </motion.section>
        </section>
      </main>
    </>
  );
};

export default Skills;
