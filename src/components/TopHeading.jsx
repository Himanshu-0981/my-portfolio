import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const TopHeading = (props) => {
  const [themeState] = useTheme();
  const { title, textColor, styleClass } = props;
  return (
    <>
      <h1
        className={`${
          themeState
            ? "text-color_white duration-300"
            : "text-dark-background duration-300"
        } text-center mt-5 font-semibold text-4xl underline underline-offset-[12px] decoration-color_green ${styleClass} `}
      >
        {title}
      </h1>
    </>
  );
};

export default TopHeading;
