import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";

import "../../styles/Navbar.css";

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "rgb(37 99 235)" : "",
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
      className={`pt-3 pb-3  ${
        isSticky ? "sticky top-0 bg-white shadow-md" : "shadow-md"
      }`}
      style={{ zIndex: 100 }}
    >
      <nav className="text-center flex justify-around items-center  sm:flex sm:justify-around p-1 ">
        <div
          className="font-medium text-[#142a36] cursor-pointer"
          onClick={goToHome}
        >
          Portfolio.io
        </div>
        <div
          style={{ zIndex: 20 }}
          className={`absolute top-0 right-0 text-center ${
            !toggle
              ? " -translate-y-48 transition-transform"
              : "translate-y-0 transition-transform"
          }  w-full sm:w-48 sm:relative sm:inline-block sm:-translate-y-0 }`}
        >
          <ul className=" text-white flex flex-col sm:flex-row pb-2.5 pt-2.5 font-medium  sm:pb-0 sm:pt-0 sm:space-x-6 bg-[#142a36] sm:text-[#142a36] sm:bg-white space-y-3 sm:space-y-0">
            <NavLink style={navLinkStyles} to="/" onClick={handleMenuClick}>
              Home
            </NavLink>
            <NavLink
              style={navLinkStyles}
              to="/about"
              onClick={handleMenuClick}
            >
              About
            </NavLink>
            <NavLink
              style={navLinkStyles}
              to="/projects"
              onClick={handleMenuClick}
            >
              Projects
            </NavLink>
            <NavLink
              style={navLinkStyles}
              to="/contact"
              onClick={handleMenuClick}
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <section className="flex sm:hidden z-20 " onClick={handleToggle}>
          {!toggle ? (
            <AiOutlineMenu className="text-[#142a36]" />
          ) : (
            <AiFillCloseCircle className="text-white" />
          )}
        </section>
      </nav>
    </main>
  );
}

export default Navbar;
