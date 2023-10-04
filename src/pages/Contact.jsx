import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import animation from "../json/Lottie_Contact.json";
import { fadeIn } from "../utils/variants";

import ContactForm from "../components/ContactForm";
import TopHeading from "../components/TopHeading";
const Contact = () => {
  return (
    <div id="contact">
      <TopHeading title="CONTACT" styleClass={"pt-5 pb-5"} />
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex justify-center pb-10"
      >
        <div className="sm:flex justify-around">
          <div className="hidden sm:block mt-5 ">
            <Lottie
              animationData={animation}
              className="delay-150 transition-all object-contain h-[30rem] w-[20rem] md:w-[25rem]"
            />
          </div>
        </div>

        <div className="w-[700px]">
          <ContactForm />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
