import React from "react";
import TopHeading from "../components/TopHeading";
import contactImg from "../assets/about_me.jpg";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <div className="flex justify-center">
            {/* <TopHeading title='GET IN TOUCH'/> */}
            <div className="sm:flex justify-around">
                <div className="hidden sm:block mt-5 border ">
                    <img src={contactImg} alt="img" className=" object-contain h-96 w-96 rounded-3xl" />
                </div>
            </div>
                {/* <div className="hidden sm:block">
                    <FaGithub />
                    <FaTwitter />
                    <FaLinkedin />
                </div> */}
            <div className="w-[700px]">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
