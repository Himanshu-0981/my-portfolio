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
      <main className="mt-10 sm:mt-16">
        <section className=" relative flex justify-center items-center z-10 pb-60  flex-col-reverse sm:flex-row">
          <div className="font-semibold text-4xl  sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl  text-[#142a36] text-center sm:mr-14 sm:text-start transform transition-transform duration-1000 ease-in">
            <h1 className="mt-1">Hi, </h1>
            <div className="mt-2">
              I am <span className="text-blue-600">Himanshu</span>
            </div>
            <div className="mt-3 ">Full stack Developer.</div>
            <section className="items-center gap-3 block sm:flex">
              <div className="mt-3 mb-3">
                <Button
                  title="contact"
                  icon={<BsArrowRightShort />}
                  flex={"flex items-center justify-between"}
                  bg="bg-blue-600"
                  hover={"justify-center"}
                  others={"w-full"}
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
              cssStyle={"w-[30rem] sm:w-[20rem] lg:w-[30rem] 2xl:w-[40rem]"}
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
