import { FiArrowUpRight } from "react-icons/fi";

import Button from "./Button";

const ProjectCards = ({ poster, title, icon, paragraph }) => {
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] m-2 p-2 xs:p-6  rounded-lg  lg:max-w-4xl md:flex md:flex-col lg:grid lg:grid-cols-2 lg:gap-10 items-center mb-10">
      <img
        src={poster}
        alt="img"
        className="w-60 xs:w-72 md:w-96 object-cover rounded-xl"
      />
      <div>
        <div className="text-xs sm:text-base md:text-xl font-semibold flex items-center space-x-2 lg:mt-0 mt-5">
          <h1 className="text-[#142a36]   ">{title}</h1>
          <section className="text-xs md:text-base">{icon}</section>
        </div>
        <p className="text-xs sm:text-sm  text-[#142a36] w-52 xs:w-72 md:w-96 custom-scrollbar">
          {paragraph}
        </p>
        <div className="flex lg:flex-row flex-col">
          <Button
            title={"Visit Site"}
            bg={"bg-blue-600"}
            hover={"bg-blue-500"}
            flex={"flex flex-center justify-center"}
            icon={<FiArrowUpRight size={18} />}
            width={""}
            others={"mr-1 mt-4 text-xs xs:text-base"}
          />
          <Button
            title={"Github"}
            bg={"bg-black"}
            flex={"flex flex-center justify-center"}
            others={"mt-4 text-xs xs:text-base"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
