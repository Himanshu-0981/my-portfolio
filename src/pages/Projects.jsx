import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FcGoogle, FcNews } from "react-icons/fc";
import { MdMovie } from "react-icons/md";

import ProjectCards from "../components/ProjectCard";
import TopHeading from "../components/TopHeading";
import projectGoogle from "../assets/google.png";
import projectYoutube from "../assets/youtube.png";
import projectNewsVerse from "../assets/newsverse.png";
import projectMovie from "../assets/movie.png";

const Projects = () => {
  return (
    <>
      <main className="bg-blue-500 p-1 xs:p-3 sm:p-5 w-450:p-16 md:p-16">
        <main className=" flex justify-center bg-white rounded-lg relative mt-10">
          <section className="absolute mb-5">
            <TopHeading title="PROJECTS" styleClass={"pt-5"} />
          </section>
          <div className="flex justify-center flex-wrap lg:flex-co rounded-lg mt-20 pt-10">
            <ProjectCards
              title={"Youtube Clone"}
              icon={<BsYoutube color="red" />}
              poster={projectYoutube}
              paragraph={
                "Designed and developed a YouTube clone using React.js, mimicking the core functionalities of the popular video-sharing platform. Implemented features such as video playback, search, and recommendations. Demonstrated proficiency in React.js and showcased ability to create dynamic and interactive web applications."
              }
            />
            <ProjectCards
              title={"Google Search Engine"}
              icon={<FcGoogle />}
              poster={projectGoogle}
              paragraph={
                "Developed a Google search engine clone using React.js, replicating core functionalities such as search suggestions, responsive design, and real-time search updates. Demonstrated proficiency in React.js and problem-solving skills in web development, showcasing creativity, adaptability, meticulousness, and strong coding abilities."
              }
            />
            <ProjectCards
              title={"Newsverse"}
              icon={<FcNews />}
              poster={projectNewsVerse}
              paragraph={
                "Created Newsverse, a news app built using React.js. Implemented features like real-time news updates, personalized news categories, and saved articles. Demonstrated expertise in React.js, API integration, and responsive design. Showcased ability to develop user-friendly and informative web applications for seamless news browsing."
              }
            />
            <ProjectCards
              title={"Movie App"}
              icon={<MdMovie color="orange" />}
              poster={projectMovie}
              paragraph={
                "Developed a movie search app using React.js, enabling users to search for movies, view details, and manage favorites. Utilized React's components and state management to create a user-friendly and responsive interface. Demonstrated proficiency in React.js and ability to develop functional and interactive web applications."
              }
            />
          </div>
        </main>
      </main>
    </>
  );
};

export default Projects;
