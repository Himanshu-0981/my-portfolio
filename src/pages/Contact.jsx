import React from "react";
import TopHeading from "../components/TopHeading";
import contactImg from "../assets/about_me.jpg";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <>
            {/* <TopHeading title='GET IN TOUCH'/> */}
        <div className="flex justify-center">
            <div className="sm:flex justify-around">
                <div className="hidden sm:block mt-5 ">
                    <img src={contactImg} alt="img" className=" object-contain h-96 w-96 rounded-3xl" />
                        {/* <div className="hidden sm:flex justify-center text-2xl space-x-8 mt-5 text-gray-600">
                        <FaGithub className=" hover:text-black "/>
                        <FaTwitter className=" hover:text-blue-500 "/>
                        <FaLinkedin className=" hover:text-blue-500 "/>
                    </div> */}
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
