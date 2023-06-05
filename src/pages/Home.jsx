import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightShort, BsGithub, BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import linkedIn from "../assets/linkedin.svg";

import "../../styles/Home.css";
import mainImg from "../assets/main_img.png";
import Button from "../components/Button";
import Skills from "../components/Skills";
import About from "../pages/About";
import Projects from "./Projects";
import Contact from "../pages/Contact";

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const navigate = useNavigate();
  const gotoPage = () => navigate("/contact");
  useEffect(() => setShowAnimation(true), []);

  return (
    <main>
      <section className="relative flex justify-center items-center mt-32 mb-44 z-10">
        <div
          className={`font-semibold text-3xl sm:text-4xl text-[#142a36] text-center sm:mr-14 sm:text-start transform ${
            showAnimation ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-1000 ease-in`}
        >
          <h1 className="mt-1">Hi, </h1>
          <div className="mt-2">
            I am{" "}
            <span className="text-blue-600 underline underline-offset-8">
              Himanshu
            </span>
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
            <section className="flex items-center ml-4 text-xl mt-3 cursor-pointer justify-center space-x-6 sm:space-x-2">
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
        <div
          className={`hidden sm:block sm:ml-14 bg-blue-600 rounded-3xl transform ${
            showAnimation ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-1000 ease-in`}
        >
          <img src={mainImg} alt="img" className="h-72" />
        </div>
      </section>
      <Skills />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
