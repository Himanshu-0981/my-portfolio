import TopHeading from "./TopHeading";
import TechStack from "./TechStack";

import htmlIcon from "../assets/icons8-html-5.svg";
import cssIcon from "../assets/icons8-css.svg";
import tailwindIcon from "../assets/icons8-tailwind-css.svg";
import jsIcon from "../assets/icons8-javascript.svg";
import reactIcon from "../assets/icons8-react-native.svg";
import nextJSIcon from "../assets/next-js.svg";
import reduxIcon from "../assets/icons8-redux.svg";

import nodeJsIcon from "../assets/icons8-nodejs.svg";
import expressIcon from "../assets/icons8-express-js.svg";
import mongoDBIcon from "../assets/mongodb-icon.svg";
import mongooseIcon from "../assets/icons8-mongoose.svg";
import firebaseIcon from "../assets/icons8-firebase.svg";

import vsCodeIcon from "../assets/icons8-vs-code.svg";
import gitIcon from "../assets/icons8-git.svg";
import githubIcon from "../assets/icons8-github.svg";
import postmanIcon from "../assets/icons8-postman.svg";

const Skills = () => {
  return (
    <main className="bg-[#2563eb] p-3 sm:p-5 w-450:p-20 md:p-20">
      <section className="bg-white rounded-lg pb-10 pt-5">
        <TopHeading title="Tech Stack" />
        <TopHeading
          title="Technology that i've been worked on"
          styleClass={"no-underline text-[10px] sm:text-base font-normal"}
        />
        <section className="flex justify-center space-x-1 w-440:space-x-2 sm:space-x-3 md:space-x-5">
          <TechStack title={"Html"} icon={htmlIcon} />
          <TechStack title={"Css"} icon={cssIcon} />
          <TechStack title={"Tailwind"} icon={tailwindIcon} />
          <TechStack title={"Javascript"} icon={jsIcon} />
          <TechStack title={"ReactJS"} icon={reactIcon} />
          <TechStack title={"NextJS"} icon={nextJSIcon} />
          {/* <TechStack title={"Redux"} icon={reduxIcon} /> */}
        </section>
        <section className="flex justify-center space-x-1 w-440:space-x-2 sm:space-x-3 md:space-x-5 ">
          <TechStack title={"NodeJS "} icon={nodeJsIcon} />
          <TechStack title={"ExpressJS "} icon={expressIcon} />
          <TechStack title={"MongoDB"} icon={mongoDBIcon} />
          <TechStack title={"Mongoose"} icon={mongooseIcon} />
          <TechStack title={"Firebase"} icon={firebaseIcon} />
        </section>
        <section className="flex justify-center space-x-1 w-440:space-x-2 sm:space-x-3 md:space-x-5">
          <TechStack title={"Vs Code"} icon={vsCodeIcon} />
          <TechStack title={"Git"} icon={gitIcon} />
          <TechStack title={"Github"} icon={githubIcon} />
          <TechStack title={"Postman"} icon={postmanIcon} />
        </section>
      </section>
    </main>
  );
};

export default Skills;
