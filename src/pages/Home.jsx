import React from "react";
import mainImg from "../assets/main_img.png";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
// import Img from '../components/Img';

const Home = () => {
    const navigate = useNavigate();
    const gotoPage = () => {
        navigate("/contact");
    };

    return (
        <div className="flex justify-center items-center mt-32 mb-32">
            <div className="font-semibold text-4xl text-[#142a36] text-center sm:mr-14 sm:text-start ">
                <div className="mt-1">Hi, </div>
                <div className="mt-2">
                    i am <span className="text-blue-600">Marvin</span>
                </div>
                <div className="mt-3 ">Web Developer</div>
                <Button title="contact" bg="bg-blue-600" handleClick={gotoPage} />
            </div>
            <div className="hidden sm:block sm:ml-14 bg-blue-600 rounded-3xl">
                <img src={mainImg} alt="img" className="h-72 " />
            </div>
        </div>
    );
};

export default Home;
