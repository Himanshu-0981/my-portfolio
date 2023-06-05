import React from "react";

import contactImg from "../assets/about_me.jpg";
import ContactForm from "../components/ContactForm";
import TopHeading from "../components/TopHeading";

const Contact = () => {
  return (
    <>
      <TopHeading title="ABOUT ME" styleClass={"pt-5 pb-5"} />
      <div className="flex justify-center pb-10">
        <div className="sm:flex justify-around">
          <div className="hidden sm:block mt-5 ">
            <img
              src={contactImg}
              alt="img"
              className=" object-contain h-96 w-96 rounded-3xl"
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
