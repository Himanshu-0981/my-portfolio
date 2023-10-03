import React from "react";

const TopHeading = (props) => {
  const { title, textColor, styleClass } = props;
  return (
    <>
      <h1
        className={`${
          textColor ? textColor : "text-color_white"
        } text-center mt-5 font-semibold text-4xl underline underline-offset-[12px] decoration-color_green ${styleClass} `}
      >
        {title}
      </h1>
    </>
  );
};

export default TopHeading;
