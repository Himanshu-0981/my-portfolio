import { useRef } from "react";
import { motion } from "framer-motion";

import "../styles/HeroImageBlob.css";
import mainImg from "../assets/main_img.png";

function HeroImage({ cssStyle }) {
  const constraintsRef = useRef(null);
  return (
    <>
      <motion.div className="wrapper" ref={constraintsRef}>
        <div className={`item ${cssStyle}`}>
          <motion.img
            src={mainImg}
            alt="main img"
            drag
            dragConstraints={constraintsRef}
          />
        </div>
      </motion.div>
    </>
  );
}

export default HeroImage;
