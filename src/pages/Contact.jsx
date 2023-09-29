import React from "react";
import Lottie from "lottie-react";
import animation from "../json/Lottie_Contact.json";

import ContactForm from "../components/ContactForm";
import TopHeading from "../components/TopHeading";
const Contact = () => {
  return (
    <>
      <TopHeading title="CONTACT" styleClass={"pt-5 pb-5"} />
      <div className="flex justify-center pb-10">
        <div className="sm:flex justify-around">
          <div className="hidden sm:block mt-5 ">
            <Lottie
              animationData={animation}
              className="object-contain h-[30rem] w-[30rem]"
            />
          </div>
        </div>

        <div className="w-[700px]">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
