import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "../../styles/Balloon.css";

const Balloon = () => {
  const randomTop = Math.random() * 100;
  const randomLeft = Math.random() * 100;
  const balloonStyle = {
    top: `${randomTop}%`,
    left: `${randomLeft}%`,
  };

  return <BsFillSuitHeartFill className="balloon" style={balloonStyle} />;
};

export default Balloon;
