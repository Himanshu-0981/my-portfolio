import { FiArrowUpRight } from "react-icons/fi";

import Button from "./Button";

const ProjectCards = ({ poster, title, icon, paragraph }) => {
  return (
    <div className="max-w-4xl grid grid-cols-2 gap-1 items-center mb-10">
      <img src={poster} alt="img" className="w-96 object-cover rounded-xl" />
      <div>
        <div className="text-xl font-semibold flex items-center space-x-2">
          <h1 className="text-[#142a36]">{title}</h1>
          <section>{icon}</section>
        </div>
        <p className="text-sm text-[#142a36]">{paragraph}</p>
        <div className="flex ">
          <Button
            title={"Visit Site"}
            bg={"bg-blue-600"}
            hover={"bg-blue-500"}
            flex={"flex flex-center items-center"}
            icon={<FiArrowUpRight size={18} />}
            others={"mr-1 mt-4"}
          />
          <Button
            title={"Github  > "}
            bg={"bg-black"}
            flex={"flex flex-center items-center"}
            others={"mt-4"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
