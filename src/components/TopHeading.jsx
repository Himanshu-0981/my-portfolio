import React from "react";

const TopHeading = (props) => {
  const { title, styleClass } = props;
  return (
    <>
      <h1
        className={`text-[#142a36] text-center mt-5 font-semibold text-2xl underline underline-offset-8 decoration-blue-600 ${styleClass} `}
      >
        {title}
      </h1>
    </>
  );
};

export default TopHeading;
