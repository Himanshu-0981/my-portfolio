import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightShort, BsGithub, BsTwitter } from "react-icons/bs";
import Lottie from "lottie-react";

import "../../styles/Home.css";
import linkedIn from "../assets/linkedin.svg";
import Button from "../components/Button";
import Skills from "../components/Skills";
import About from "../pages/About";
import Projects from "./Projects";
import Contact from "../pages/Contact";
import blob from "../json/lottie_blob.json";
import mainImg from "../assets/main_img.png";
import HeroImage from "../components/HeroImage";

const Home = () => {
  const navigate = useNavigate();
  const gotoPage = () => navigate("/contact");

  return (
    <>
      <main style={{ marginTop: "64px" }} className="">
        <section className=" relative flex justify-center items-center  z-10 pb-60">
          <div className="font-semibold  sm:text-4xl text-[#142a36] text-center sm:mr-14 sm:text-start transform transition-transform duration-1000 ease-in">
            <h1 className="mt-1 text-5xl">Hi, </h1>
            <div className="mt-2">
              I am <span className="text-blue-600 ">Himanshu</span>
            </div>
            <div className="mt-3 ">Full stack Developer.</div>
            <section className="items-center block sm:flex">
              <Button
                title="contact"
                icon={<BsArrowRightShort />}
                flex={"flex items-center justify-between"}
                bg="bg-blue-600"
                hover={"justify-center"}
                width={"w-full"}
                others={"mt-3 p-0"}
                handleClick={gotoPage}
              />
              <section className="relative flex items-center ml-4 text-xl mt-3 cursor-pointer justify-center space-x-6 sm:space-x-2">
                <section
                  onClick={() =>
                    navigate(
                      window.open("https://www.linkedin.com/in/himanshu0001/")
                    )
                  }
                >
                  <img src={linkedIn} alt="" className="h-12" />
                </section>
                <BsGithub
                  size={30}
                  onClick={() =>
                    navigate(window.open("https://github.com/Himanshu-0981"))
                  }
                />
                <BsTwitter
                  size={30}
                  color="#2563eb"
                  onClick={() =>
                    navigate(window.open("https://twitter.com/marvinn0001"))
                  }
                />
              </section>
            </section>
          </div>
          <HeroImage cssStyle={"w-[30rem]"} />
        </section>

        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
