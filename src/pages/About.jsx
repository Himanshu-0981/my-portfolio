import React from "react";
import mainImg from "../assets/main_img.png";
import TopHeading from "../components/TopHeading";
import AboutMeText from "../components/AboutMeText";

const About = () => {
  return (
    <>
      <TopHeading title="ABOUT ME" styleClass={"pt-5 pb-10"} />
      <div className="flex justify-center items-center mb-24 ">
        <div className="hidden sm:block  md:mr-5 lg:mr-20 bg-blue-600 rounded-3xl">
          <img src={mainImg} alt="img" className="h-60 w-fit md:h-72 " />
        </div>
        <div className="w-[32rem] text-center  mr-5 ml-5 sm:text-start ">
          <AboutMeText />
        </div>
      </div>
    </>
  );
};

export default About;
