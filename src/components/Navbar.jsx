import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";
import {
  AiOutlineMenu,
  AiFillCloseSquare,
  AiOutlineCode,
} from "react-icons/ai";

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#01d28a" : "#c9d1d9",
      textDecoration: isActive ? "underline" : "none",
      textUnderlineOffset: isActive ? "8px" : "none",
      textDecorationThickness: isActive ? "2px" : "none",
    };
  };

  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  const handleToggle = () => setToggle(!toggle);
  const handleMenuClick = () => setToggle(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 200;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > threshold) setIsSticky(true);
      else setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleNavScroll = () => {
      const positionY = window.scrollY;
      if (positionY > 30) handleMenuClick();
    };
    window.addEventListener("scroll", handleNavScroll);
  }, []);

  return (
    <main
      className={`pt-3 pb-3 ${
        isSticky ? "sticky top-0  bg-color_dark_blue " : " bg-color_dark_blue"
      }`}
      style={{ zIndex: 100 }}
    >
      <nav className="text-center flex justify-between pr-4 pl-4 md:pr-0 md:pl-0  items-center  sm:flex xs:justify-around p-1 text-sm ">
        <div
          className="font-medium text-color_gray text-base md:text-xl cursor-pointer flex items-center"
          onClick={goToHome}
        >
          <span className="text-color_green">H</span>
          <span>imanshu</span>
          <span className="ml-2">
            <AiOutlineCode size={25} />
          </span>
        </div>
        <div
          style={{ zIndex: 20 }}
          className={`absolute top-0 right-0 text-center ${
            !toggle
              ? " -translate-y-48 transition-transform"
              : "translate-y-0 transition-transform"
          }  w-full sm:w-48 sm:relative sm:inline-block sm:-translate-y-0 }`}
        >
          <ul className=" text-color_gray flex flex-col sm:flex-row pb-2.5 pt-2.5 font-medium  sm:pb-0 sm:pt-0 sm:space-x-6 bg-color_dark_blue  sm:bg-white space-y-3 sm:space-y-0">
            <Link
              to="#"
              smooth
              onClick={handleMenuClick}
              className="hover:text-color_green"
            >
              Home
            </Link>
            <Link
              to="#about"
              smooth
              onClick={handleMenuClick}
              className="hover:text-color_green"
            >
              About
            </Link>
            <Link
              to="#projects"
              smooth
              onClick={handleMenuClick}
              className="hover:text-color_green"
            >
              Projects
            </Link>
            <Link
              to="#contact"
              smooth
              onClick={handleMenuClick}
              className="hover:text-color_green"
            >
              Contact
            </Link>
          </ul>
        </div>
        <section className="flex sm:hidden z-20 " onClick={handleToggle}>
          {!toggle ? (
            <AiOutlineMenu className="text-color_green" size={18} />
          ) : (
            <AiFillCloseSquare className="text-color_green" size={18} />
          )}
        </section>
      </nav>
    </main>
  );
}

export default Navbar;
