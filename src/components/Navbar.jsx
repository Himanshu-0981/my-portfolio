import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";
import {
  AiOutlineMenu,
  AiFillCloseSquare,
  AiOutlineCode,
} from "react-icons/ai";
import { useTheme } from "../contexts/ThemeContext";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  const handleToggle = () => setToggle(!toggle);
  const handleMenuClick = () => setToggle(false);
  const [themeState, setThemeState] = useTheme();

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
      className={`pt-3 pb-3 ${isSticky ? "sticky top-0 " : " "} ${
        themeState
          ? "bg-dark-background text-color_gray duration-300"
          : "bg-color_white text-color_black duration-300"
      }`}
      style={{ zIndex: 100 }}
    >
      <nav className="text-center flex justify-between pr-4 pl-4 md:pr-0 md:pl-0  items-center  sm:flex xs:justify-around p-1 text-sm ">
        <div
          className="font-medium  text-base md:text-xl cursor-pointer flex items-center"
          onClick={goToHome}
        >
          <span className="text-color_green">H</span>
          <span>imanshu </span>
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
          }  w-full md:w-48 md:relative md:inline-block md:-translate-y-0 }`}
        >
          <ul
            className={`text-color_gray flex flex-col md:flex-row pb-2.5 pt-2.5 font-medium  md:pb-0 md:pt-0 md:space-x-6 ${
              themeState
                ? "bg-dark-background duration-300 "
                : "bg-light-background text-color_dark_blue duration-300"
            }  md:bg-white space-y-3 md:space-y-0`}
          >
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
            <div className="flex items-center justify-center">
              <label className="relative inline-flex items-center mr-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={themeState}
                  className="sr-only peer"
                  onChange={(e) => setThemeState(e.target.checked)}
                />
                <div className="w-11 h-6 bg-color_gray rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-color_white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-color_green" />
              </label>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {themeState ? (
                  <BsFillMoonFill size={19} className="text-color_white" />
                ) : (
                  <BsFillSunFill size={19} className="text-dark-background" />
                )}
              </span>
            </div>
          </ul>
        </div>
        <section className="flex md:hidden z-20 " onClick={handleToggle}>
          {!toggle ? (
            <AiOutlineMenu
              className={`${
                themeState
                  ? " text-color_green duration-300"
                  : "text-color_dark_blue duration-300"
              }`}
              size={18}
            />
          ) : (
            <AiFillCloseSquare
              className={`${
                themeState
                  ? " text-color_green duration-300"
                  : "text-color_dark_blue duration-300"
              }`}
              size={18}
            />
          )}
        </section>
      </nav>
    </main>
  );
}

export default Navbar;
