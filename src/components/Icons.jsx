import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Icons() {
  const navigate = useNavigate();
  return (
    <div className=" md:w-fit flex justify-center gap-0 items-center mt-3 mb-3">
      <div className="bg-white p-2 rounded-[4px] cursor-pointer">
        <BsGithub
          size={25}
          color="white"
          onClick={() =>
            navigate(window.open("https://github.com/Himanshu-0981"))
          }
        />
      </div>
      <div className="bg-white p-2 rounded-[4px] cursor-pointer">
        <BsLinkedin
          size={25}
          color="white"
          onClick={() =>
            navigate(window.open("https://www.linkedin.com/in/himanshu0001/"))
          }
        />
      </div>
      <div className="bg-white p-2 rounded-[4px] cursor-pointer">
        <RiTwitterXFill
          size={25}
          color="white"
          onClick={() =>
            navigate(window.open("https://twitter.com/marvinn0001"))
          }
        />
      </div>
    </div>
  );
}

export default Icons;
