import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Icons() {
  const navigate = useNavigate();
  return (
    <div className="border-white border-2 md:w-fit flex justify-center gap-1 items-center mt-3 mb-3">
      <div className="bg-black p-2 rounded-[4px]">
        <BsGithub
          size={25}
          color="white"
          onClick={() =>
            navigate(window.open("https://github.com/Himanshu-0981"))
          }
        />
      </div>
      <div className="bg-blue-600 p-2 rounded-[4px]">
        <BsLinkedin
          size={25}
          color="white"
          onClick={() =>
            navigate(window.open("https://www.linkedin.com/in/himanshu0001/"))
          }
        />
      </div>
      <div className="bg-gray-900 p-2 rounded-[4px]">
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
