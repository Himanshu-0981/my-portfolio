import mainImg from "../assets/main_img.png";
import TopHeading from "../components/TopHeading";
import AboutMeText from "../components/AboutMeText";
import HeroImage from "../components/HeroImage";
const About = () => {
  return (
    <>
      <TopHeading title="ABOUT ME" styleClass={"pt-5 pb-10"} />
      <div className="flex justify-center items-center mb-24 mt-5">
        <HeroImage cssStyle={"w-[22rem] hidden md:flex"} />
        <div className="w-[32rem] text-center  mr-5 ml-5 sm:text-start ">
          <AboutMeText />
        </div>
      </div>
    </>
  );
};

export default About;
