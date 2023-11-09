import { useTheme } from "../contexts/ThemeContext";

const ProjectCards = ({ src, title, icon, description, visit, github }) => {
  const [themeState] = useTheme();
  return (
    <>
      <div
        className={`h-[26rem]  sm:w-[18rem]  md:w-[22rem] ${
          themeState
            ? "bg-dark-transparent duration-300"
            : "bg-[#a4b5db38] shadow-lg duration-300"
        }   rounded-lg`}
      >
        <div
          className={`  p-4 ${
            themeState
              ? "text-color_white duration-300"
              : "text-color_black duration-300"
          } `}
        >
          <div className=" sm:h-40 md:h-44">
            <img src={src} alt="project" className=" rounded-lg" />
          </div>
          <h1 className=" mt-0 md:mt-2 text-lg ">{title}</h1>
          <p className="h-16  w-440:w-96 sm:w-full font-normal opacity-80">
            {description}
          </p>

          <button>{visit} </button>
          <button>{github}</button>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
