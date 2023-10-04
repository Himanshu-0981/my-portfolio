import { motion } from "framer-motion";

import TopHeading from "../components/TopHeading";
import AboutMeText from "../components/AboutMeText";
import HeroImage from "../components/HeroImage";
import { fadeIn } from "../utils/variants";

const About = () => {
  return (
    <div id="about">
      <TopHeading title="ABOUT ME" styleClass={"pt-5 pb-5"} />
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex justify-center items-center mb-24 mt-5"
      >
        <div>
          <HeroImage cssStyle={"w-[22rem] hidden md:flex"} />
        </div>
        <div className="w-[32rem] text-center  mr-5 ml-5 sm:text-start ">
          <AboutMeText />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
