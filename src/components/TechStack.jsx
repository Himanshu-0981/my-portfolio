import { useTheme } from "../contexts/ThemeContext";
const TechStack = ({ title, icon }) => {
  const [themeState] = useTheme();
  return (
    <main>
      <section className="flex justify-center space-x-14 mt-10 ">
        <section
          className={`flex flex-col items-center  text-[0px] md:text-sm ${
            themeState
              ? "text-color_white duration-300"
              : "text-dark-background duration-300"
          } `}
        >
          <img
            src={icon}
            alt="JavaScript Icon"
            className={` transition-all w-8 h-8 p-1 xs:w-12 xs:h-12 xs:p-2 sm:w-12 sm:h-12 sm:p-2 md:w-14 md:h-14 md:m-2 md:p-3 ${
              themeState
                ? " bg-color_dark_blue duration-300"
                : " bg-color_white border border-color_blue_transparent duration-300"
            }  rounded-2xl hover:border-4 hover:border-color_green `}
          />
          <p
            className={` ${
              themeState
                ? "text-color_white duration-300"
                : "text-dark-background duration-300"
            }  `}
          >
            {title}
          </p>
        </section>
      </section>
    </main>
  );
};

export default TechStack;
