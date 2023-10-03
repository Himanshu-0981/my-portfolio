import { useNavigate } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

import "../../styles/Home.css";
import Button from "../components/Button";
import Skills from "../components/Skills";
import About from "../pages/About";
import Projects from "./Projects";
import Contact from "../pages/Contact";
import HeroImage from "../components/HeroImage";
import Icons from "../components/Icons";

const Home = () => {
  const navigate = useNavigate();
  const gotoPage = () => navigate("/contact");

  return (
    <>
      <main className="pt-10 sm:pt-20 bg-color_dark_blue">
        <section className=" relative flex justify-center items-center z-10 pb-60  flex-col-reverse sm:flex-row">
          <div className="font-semibold text-2xl w-440:text-4xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-color_white text-center sm:mr-14 sm:text-start transform transition-transform duration-1000 ease-in">
            <h1 className="mt-1 text-5xl font-semibold">Hello , </h1>
            <div className="mt-2">
              I am{" "}
              <span className="text-blue-600 text-color_green ">Himanshu</span>
            </div>
            <div className="mt-3 ">Full stack Developer.</div>
            <section className="items-center gap-3 block sm:flex ">
              <div className="mt-5 mb-5 md:mt-10 md:mb-10">
                <Button
                  title="contact"
                  icon={<BsArrowRightShort />}
                  flex={"flex items-center justify-between"}
                  bg="bg-color_blue_transparent"
                  others={"w-full hover:scale-110 duration-200 border-2"}
                  handleClick={gotoPage}
                />
              </div>
              <div>
                <Icons />
              </div>
            </section>
          </div>

          <div>
            <HeroImage
              cssStyle={
                "w-[10rem] w-370:w-[15rem] w-440:w-[25rem] sm:w-[20rem] lg:w-[30rem] 2xl:w-[40rem] -z-10"
              }
            />
          </div>
        </section>

        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
