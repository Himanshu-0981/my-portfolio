import { useTheme } from "../contexts/ThemeContext";

function AboutMeText() {
  const [themeState] = useTheme();
  return (
    <>
      <p
        className={`${
          themeState
            ? "text-color-gray duration-300"
            : "text-color_black duration-300"
        } text-base`}
      >
        <span className="text-4xl font-semibold"> Hey,</span> I'm{" "}
        <span className="font-semibold text-color_green"> Himanshu Tiwari</span>
        , a <span className="font-semibold text-color_green">BCA graduate</span>{" "}
        seeking a web development career. As a{" "}
        <span className="font-semibold text-color_green">
          full stack developer
        </span>
        , I have successfully completed numerous exciting projects, showcasing
        my skills in creating responsive interfaces and dynamic components. With
        a focus on user experience, I have proficiency in{" "}
        <span className="font-semibold text-color_green">
          {" "}
          HTML, CSS, JavaScript, React, Next.js, Node.js, MongoDB, and Mongoose
        </span>
        . I employ the latest technologies to build robust and scalable
        applications. I am highly motivated to continue learning and staying
        updated with industry trends. My dedication, combined with my technical
        skills, makes me a valuable addition to any web development team. I am
        eager to contribute my expertise and collaborate with professionals to
        create innovative web solutions. Please take a moment to{" "}
        <span className="font-semibold text-color_green ">
          explore my portfolio and see the projects
        </span>{" "}
        I've worked on.
      </p>
    </>
  );
}

export default AboutMeText;
