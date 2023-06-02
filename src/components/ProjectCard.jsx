import { FiArrowUpRight } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

import Button from "./Button";

const ProjectCards = ({ poster, title, icon, paragraph }) => {
  return (
    <div className="max-w-4xl grid grid-cols-2 gap-1 items-center mb-10">
      <img src={poster} alt="img" className="w-96 object-cover rounded-xl" />
      <div>
        <p className="text-sm">{paragraph}</p>
        <div className="flex ">
          <Button
            title={"Visit Site"}
            bg={"bg-blue-600"}
            hover={"bg-blue-500"}
            flex={"flex flex-center items-center"}
            icon={<FiArrowUpRight size={18} />}
          />
          <Button
            title={"Github  > "}
            bg={"bg-black"}
            flex={"flex flex-center items-center"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
