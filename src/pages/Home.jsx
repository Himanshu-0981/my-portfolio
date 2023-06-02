import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BsArrowRightShort,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import mainImg from "../assets/main_img.png";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();
  const gotoPage = () => {
    navigate("/contact");
  };

  return (
    <div className="flex justify-center items-center mt-32 mb-32 ">
      <div className="font-semibold text-4xl text-[#142a36] text-center sm:mr-14 sm:text-start ">
        <div className="mt-1">Hi, </div>
        <div className="mt-2">
          I am{" "}
          <span className="text-blue-600 underline underline-offset-8">
            Himanshu
          </span>
        </div>
        <div className="mt-3 ">Full stack Developer.</div>
        <section className="flex items-center">
          <Button
            title="contact"
            icon={<BsArrowRightShort />}
            flex={"flex items-center"}
            bg="bg-blue-600"
            hover={"bg-blue-500"}
            others={"mt-3"}
            width={"w-1/3"}
            handleClick={gotoPage}
          />
          <section className="flex space-x-2 ml-4 text-xl mt-3 cursor-pointer">
            <BsGithub
              onClick={() =>
                navigate(window.open("https://github.com/Himanshu-0981"))
              }
            />
            <BsTwitter
              color="#2563eb"
              onClick={() =>
                navigate(window.open("https://twitter.com/marvinn0001"))
              }
            />
            <AiFillLinkedin
              color="#0077b5"
              onClick={() =>
                navigate(
                  window.open("https://www.linkedin.com/in/himanshu0001/")
                )
              }
            />
          </section>
        </section>
      </div>
      <div className="hidden sm:block sm:ml-14 bg-blue-600 rounded-3xl">
        <img src={mainImg} alt="img" className="h-72 " />
      </div>
    </div>
  );
};

export default Home;
