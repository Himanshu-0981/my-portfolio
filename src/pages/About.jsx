import React from "react";
import mainImg from "../assets/main_img.png";
import TopHeading from "../components/TopHeading";
import AboutMeText from "../components/AboutMeText";

const About = () => {
  return (
    <>
   <TopHeading title='ABOUT ME'/>
      <div className='flex justify-center items-center mt-12 sm:mt-24 mb-24 '>
      <div className="hidden sm:block sm:mr-14 bg-blue-600 rounded-3xl">
        <img src={mainImg} alt="img" className="h-72 " />
      </div>
      <div className="w-96 text-center  mr-10 ml-10 sm:text-start sm:ml-14 ">
       <AboutMeText />
      </div>
      </div>
    </> 
  );
};

export default About;
